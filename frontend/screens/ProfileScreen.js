import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from "react-native";
import React from "react";
import Header from "../section/Header";
import Balance from "../components/Balance";
import { transactionData } from "../utils/data";
import { StyledSafeAreaView } from "../styles/styles";

export default function ProfileScreen() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const page = "profile";
  return (
    <StyledSafeAreaView>
      <Header page={page}></Header>
      <View className={" dark:bg-neutral-900 dark:text-white"}>
        <Balance />
      </View>
    </StyledSafeAreaView>
  );
}
