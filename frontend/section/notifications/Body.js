import { View, Text, FlatList } from "react-native";
import React from "react";
import NotificationCard from "../../components/NotificationCard";
import { transactionData, notificationsData } from "../../utils/data";

//spojení dat a vytvoření unique klíče podle pořadí?
const combinedData = [...transactionData, ...notificationsData].map(
  (item, index) => ({
    ...item,
    uniqueKey: index.toString(),
  })
);

export default function Body() {
  // Přidání "type" do všech objektů
  const combinedDataType = combinedData.map((item) => ({
    ...item,
  }));

  //seřazení dat podle data a času
  const sortedData = combinedDataType.sort((a, b) => {
    const dateA = new Date(a.date + " " + a.time);
    const dateB = new Date(b.date + " " + b.time);
    return dateA - dateB;
  });
  const renderItem = ({ item }) => (
    <NotificationCard data={item} />
  )

  return (
    <View className=" pt-4 bg-blend-lighten w-full flex justify-center items-center dark:bg-neutral-900 shadow-black shadow-xl ">
      <FlatList
        renderItem={renderItem}
        keyExtractor={(item) => item.uniqueKey}
        data={sortedData.reverse()}
        ItemSeparatorComponent={() => <View className="h-4" 
        />}
      />
    </View>
  );
}
