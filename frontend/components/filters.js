import { View, Text, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import RNPickerSelect from "react-native-picker-select";

export default function filters({
  transactionTypeFilter,
  setTransactionTypeFilter,
  timePeriodFilter,
  setTimePeriodFilter,
}) {
  const transactionPickerRef = useRef(null);
  const datePickerRef = useRef(null);

  const transactionsTypeOptions = [
    { label: "All", value: "all" },
    { label: "Income", value: "Income" },
    { label: "Costs", value: "costs" },
    { label: "News", value: "news"},
  ];

  const timePeriodOptions = [
    { label: "All", value: "all" },
    { label: "Last 7 days", value: "last7days" },
    { label: "Last 30 Days", value: "last30days" },
  ];

  return (
    <View className="flex-row items-center justify-between">
      {/* nefunguje onPress */}
      <TouchableOpacity

        onPress={() => transactionPickerRef.current.toggle}
        className="mx-3 flex-row"
      >
        <View>
        <Text className="dark:text-white">Type: </Text>
          <RNPickerSelect
            items={transactionsTypeOptions}
            onValueChange={(value) => setTransactionTypeFilter(value)}
            value={transactionTypeFilter}
            
         />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => datePickerRef.current.toggle}
        className="flex-row"
      >
        <View>
          <Text className="dark:text-white">Date: </Text>
          <RNPickerSelect
            items={timePeriodOptions}
            onValueChange={(value) => setTimePeriodFilter(value)}
            value={timePeriodFilter} 
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
