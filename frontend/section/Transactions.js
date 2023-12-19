import { View, Text, FlatList } from "react-native";
import React from "react";
import { transactionData } from "../utils/data";
import TransactionCard from "../components/TransactionCard";
import Animated, { FadeInDown } from "react-native-reanimated";
import { StyledText } from "../styles";

export default function Transactions() {
  //TODO: horhom/bottom-sheet add do 70% obrazovky aby bylo vidět aspoň 10%
  return (
    <Animated.View
      className="mt-8"
      entering={FadeInDown.duration(500).springify().delay(300)}
    >
      {/* Title */}
      <StyledText className="text-3xl mb-4" >Last Transactions</StyledText>

      {/* Cards */}
      <FlatList
        data={[...transactionData].reverse()}
        keyExtractor={(item) => item.id}
        initialNumToRender={20}
        contentContainerStyle={{ paddingBottom: 170 }}
        removeClippedSubviews={false}
        height={400}
        renderItem={({ item }) => <TransactionCard data={item}/>}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className="h-4" />}
      />
    </Animated.View>
  );
}
