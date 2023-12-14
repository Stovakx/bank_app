import { View, Text, ScrollView } from "react-native";
import React from "react";
import { carousalData } from "../utils/data";
import Animated, { FadeInDown } from "react-native-reanimated";
import CardItem from "../components/CardItem";
import { FontStyles } from "../styles/fonts";

export default function Card() {
  return (
    <Animated.View
      className="mt-8 mb-4"
      entering={FadeInDown.duration(500).springify().delay(200)}
    >
      <Text
        style={FontStyles.SpaceGroteskBold}
        className="text-4xl mb-4 dark:text-white"
      >
        Cards
      </Text>

      <ScrollView
        horizontal
        className="space-x-5"
        showsHorizontalScrollIndicator={false}
      >
        {carousalData.map((item) => (
          <CardItem
            key={item.id}
            imgUrl={item.imgUrl}
            price={item.price}
            cardType={item.cardType}
            cardNumber={item.cardNumber}
            backgroundColor={item.backgroundColor}
          />
        ))}
      </ScrollView>
    </Animated.View>
  );
}
