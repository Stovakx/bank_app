import React, { useState } from "react";
import { View} from "react-native";
import Header from "../section/notifications/Header";
import Body from "../section/notifications/Body";
import { useRoute } from "@react-navigation/native";


export default function NotificationScreen() {
  const [transactionTypeFilter, setTransactionTypeFilter] = useState("all");
  const [timePeriodFilter, setTimePeriodFilter] = useState("all");
  const router = useRoute();
  

  const handleTransactionTypeFilterChange = (newFilter) => {
    setTransactionTypeFilter(newFilter);
  };

  const handleTimePeriodFilterChange = (newFilter) => {
    setTimePeriodFilter(newFilter);
  };

  return (
    <View className="flex-col items-center dark:bg-neutral-900  h-full">
      <Header/>
      <Body
        transactionTypeFilter={transactionTypeFilter}
        timePeriodFilter={timePeriodFilter}
      />
    </View>
  );
}
