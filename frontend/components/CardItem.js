import { View, TouchableOpacity, Dimensions, Image } from "react-native";
import React from "react";
import { StyledText } from "../styles/styles";
const { width, height } = Dimensions.get("window");

export default function CardItem({
  imgUrl,
  price,
  cardType,
  cardNumber,
  backgroundColor,
}) {
  return (
    <TouchableOpacity className="mr-4">
      <View
        className="rounded-3xl py-8 px-4 justify-between"
        style={{
          width: width * 0.45,
          height: height * 0.3,
          backgroundColor: backgroundColor,
        }}
      >
        <Image
          source={imgUrl}
          style={{
            width: 65,
            height: 65,
          }}
          resizeMode="contain"
        />

        <View className="space-y-2">
          <StyledText
            className="text-lg text-white"
          >
            {cardNumber}
          </StyledText>
        </View>

        <View className="space-y-2">
          <StyledText
            className="text-2xl text-white"

          >
            {price}
          </StyledText>

          <StyledText
            className="font-medium text-lg text-white"

          >
            {cardType}
          </StyledText>
        </View>
      </View>
    </TouchableOpacity>
  );
}
