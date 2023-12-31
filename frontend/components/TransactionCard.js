import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");

export default function TransactionCard({
data
}) {
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity
      className="rounded-3xl py-8 px-4 justify-between flex-row items-center bg-[#e5e5e5] shadow-sm"
      style={{
        width: "100%",
        maxWidth: width,
        height: height * 0.12,
      }}
      onPress={()=> navigation.navigate('DetailScreen', {data})}
    >
      <View className="flex-row space-x-6 items-center justify-center">
        <View className="bg-white rounded-xl">
          <Image
            source={data.imageSource}
            style={{
              width: 65,
              height: 65,
            }}
            resizeMode="contain"
          />
        </View>

        <View className="space-y-1">
          {/* Name */}
          <Text
            className="text-2xl"

          >
            {data.name}
          </Text>

          {/* Type */}
          <Text
            className="text-sm text-neutral-500"

          >
            {data.description}
          </Text>
        </View>
      </View>

      <View className="space-y-1 ">
        {/* Amount */}
        <Text
          className={`${data.typeOfTransaction === "costs" ?"text-red-500":"text-green-500"} text-xl text-right`}
        >
          {data.amount}
        </Text>

        {/* Date */}
        <Text
          className="text-sm text-neutral-500"
        >
          {data.date}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
