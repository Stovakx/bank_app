import { View, Text, Image } from "react-native";
import React, { useState } from "react";

export default function NotificationCard({ item }) {
  const [isNew, setIsNew] = useState(null);

  return (
    /* přidat efekt, když to je nepřečtené oznámení, jiný odstím background Color(jako facebook/messenger atd..) */
    //odstranit pozadí obrázku a dát normální barvu, tahle hrozně svítí
    // přidat data(date,time, name, description || type, atd... )
    <View className="w-full bg-[#52CBBC] flex-row justify-between items-center">
      <View className=" pl-3">
        <Image
          source={require("../assets/images/Notification.jpeg")}
          style={{
            width: 65,
            height: 65,
            backgroundColor:"none"
          }}
          resizeMode="contain"
        />
      </View>
      <View className="felx-col space-y-2">
        <Text>TExt</Text><Text>TExt</Text>
      </View>
      <View className="felx-col space-y-2">
        <Text>TExt</Text><Text>TExt</Text>
      </View>

      <View className=" pr-3">
        <Text>NotificationCard</Text>
      </View>
    </View>
  );
}
