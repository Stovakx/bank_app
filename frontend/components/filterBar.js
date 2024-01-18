import { View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { StyledText } from "../styles";
import React, { useState } from "react";

const FilterBar = ({ onSelectFilter, filters }) => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);

  const yearRange = () => {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 1999 }, (_, index) => ({
      label: (currentYear - index).toString(),
      value: (currentYear - index).toString(),
    }));
    return years;
  };

  const dayRange = (selectedYear, selectedMonth) => {
    if (!selectedYear || !selectedMonth) {
      return [];
    }
    const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
    const days = Array.from({ length: daysInMonth }, (_, index) => ({
      label: (index + 1).toString(),
      value: (index + 1).toString(),
    }));
    return days;
  };

  const monthRange = () => {
    const months = Array.from({ length: 12 }, (_, index) => {
      const date = new Date(0, index);
      const monthName = date.toLocaleDateString(undefined, { month: "long" });
      return { label: monthName, value: (index + 1).toString() };
    });
    return months;
  };

  return (
    <View classname="">
      <View classname="my-3">
        <StyledText style={"text-2xl"}>Filters</StyledText>
      </View>
      <View classname="flex-row justify-center space-y-3">
        <View>
          <RNPickerSelect
            darkTheme={true}
            placeholder={{ label: "Select Year", value: null }}
            items={yearRange()}
            value={filters.year}
            onValueChange={(value) => {
              onSelectFilter("year", value);
              setSelectedYear(value);
            }}
          />
        </View>

        <RNPickerSelect
          darkTheme={true}
          placeholder={{ label: "Select Month", value: null }}
          items={monthRange()}
          value={filters.month}
          onValueChange={(value) => {
            onSelectFilter("month", value);
            setSelectedMonth(value);
          }}
        />

        {selectedMonth && (
          <RNPickerSelect
            darkTheme={true}
            placeholder={{ label: "Select Day", value: null }}
            items={dayRange(selectedYear, selectedMonth)}
            value={filters.day}
            onValueChange={(value) => onSelectFilter("day", value)}
          />
        )}
      </View>
      {/* Další filtry zde */}
    </View>
  );
};

export default FilterBar;
