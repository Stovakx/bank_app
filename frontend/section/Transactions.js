import { View, Text, FlatList } from "react-native";
import React from "react";
import { transactionData } from "../utils/data";
import TransitionCard from "../components/TransitionCard";
import Animated, { FadeInDown} from "react-native-reanimated";

export default function Transactions() {
//TODO: horhom/bottom-sheet add do 70% obrazovky aby bylo vidět aspoň 10%
  return (
    <Animated.View
      className="mt-8"
      entering={FadeInDown.duration(500).springify().delay(300)}
    >
      {/* Title */}
      <Text
        className="text-3xl dark:text-white mb-4"
      >
        Last Transactions
      </Text>

      {/* Cards */}
      <FlatList
        data={[...transactionData].reverse()}
        keyExtractor={(item) => item.id}
        initialNumToRender={20}
        contentContainerStyle={{ paddingBottom: 150 }}
        removeClippedSubviews={false}
        height={400}
        renderItem={({ item }) => <TransitionCard {...item} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className="h-4" />}
      />
    </Animated.View>
  );
}
