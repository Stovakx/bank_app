import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import * as Icon from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");

export default function NotificationCard({ data }) {
  const [isNew, setIsNew] = useState(null);
  const navigation = useNavigation();
  return (
    /* přidat efekt, když to je nepřečtené oznámení, jiný odstím background Color(jako facebook/messenger atd..) */
    //odstranit pozadí obrázku a dát normální barvu, tahle hrozně svítí
    // přidat data(date,time, name, description || type, atd... )
    <TouchableOpacity onPress={()=> navigation.navigate("TransactionDetails")} className={`rounded-3xl py-8 px-4 justify-between bg-[#e5e5e5] flex-row items-center shadow-sm `}>
      <View className="flex-row space-x-6 items-center justify-center">
        <View>
          <Icon.BellAlertIcon size={45} color={"black"} />
        </View>
        <View className="space-y-2 ">
          <Text>{data.name}</Text>
          <Text>{data.type}</Text>
        </View>
      </View>
      <View className="space-y-2 mx-auto">
        <Text className={`${data.typeOfTransaction === "costs" ?"text-red-500":"text-green-500"}`}>{data.amount}</Text>
        <Text>{[data.date, " ", data.time]}</Text>
      </View>
    </TouchableOpacity>
  );
}
