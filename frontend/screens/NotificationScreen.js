import React, { useState } from "react";
import { View} from "react-native";
import Header from "../section/notifications/Header";
import Body from "../section/notifications/Body";
import Filters from "../components/filters";

export default function NotificationScreen() {
  const [transactionTypeFilter, setTransactionTypeFilter] = useState("all");
  const [timePeriodFilter, setTimePeriodFilter] = useState("all");


  const handleTransactionTypeFilterChange = (newFilter) => {
    setTransactionTypeFilter(newFilter);
  };

  const handleTimePeriodFilterChange = (newFilter) => {
    setTimePeriodFilter(newFilter);
  };

  return (
    <View className="flex-col items-center dark:bg-neutral-900  h-full">
      <Header>
        <Filters
          transactionTypeFilter={transactionTypeFilter}
          setTransactionTypeFilter={handleTransactionTypeFilterChange}
          timePeriodFilter={timePeriodFilter}
          setTimePeriodFilter={handleTimePeriodFilterChange}
        />
      </Header>
      <View className="h-2  bg-neutral-900 dark:bg-white w-full  rounded-lg"/>
      <Body
        transactionTypeFilter={transactionTypeFilter}
        timePeriodFilter={timePeriodFilter}
      />
    </View>
  );
}
