import { View } from "react-native";
/* předělat na react-native-picker-select, je hezčí pro ios vzhledově vůči tomu, co od toho čekáš */
import { Picker } from "@react-native-picker/picker";
import { StyledText } from "../styles";
import React, { useState } from "react";

const FilterBar = ({ onSelectFilter, filters }) => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);

  const yearRange = () => {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 1999 }, (_, index) =>
      (currentYear - index).toString()
    );
    return years;
  };

  const dayRange = (selectedYear, selectedMonth) => {
    if (!selectedYear || !selectedMonth) {
      // Pokud není vybrán měsíc, zobrazí se 31 dní
      return Array.from({ length: 31 }, (_, index) => (index + 1).toString());
    }

    const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
    const days = Array.from({ length: daysInMonth }, (_, index) =>
      (index + 1).toString()
    );
    return days;
  };

  const monthRange = () => {
    const months = Array.from({ length: 12 }, (_, index) => {
      const date = new Date(0, index);
      const monthName = date.toLocaleDateString(undefined, { month: "long" });
      return { value: (index + 1).toString(), label: monthName };
    });
    return months;
  };

  return (
    <View classname="space-y-1">
      <View>
        <StyledText style={"text-2xl"}>Filters</StyledText>
      </View>
      <View classname="flex-row justify-center">
        <Picker
          selectedValue={filters.year}
          onValueChange={(value) => {
            onSelectFilter("year", value);
            setSelectedYear(value);
          }}
        >
          {yearRange().map((year) => (
            <Picker.Item key={year} label={year} value={year} />
          ))}
        </Picker>

        <Picker
          selectedValue={filters.month}
          onValueChange={(value) => {
            onSelectFilter("month", value);
            setSelectedMonth(value);
          }}
        >
          {monthRange().map((month) => (
            <Picker.Item
              key={month.value}
              label={month.label}
              value={month.value}
            />
          ))}
        </Picker>

        {selectedMonth && (
          <Picker
            selectedValue={filters.day}
            onValueChange={(value) => onSelectFilter("day", value)}
          >
            {dayRange(selectedYear, selectedMonth).map((day) => (
              <Picker.Item key={day} label={day} value={day} />
            ))}
          </Picker>
        )}
      </View>
      <View>

      </View>
    </View>
  );
};

export default FilterBar;
