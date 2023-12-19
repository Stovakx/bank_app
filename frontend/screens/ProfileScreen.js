import { View, useColorScheme } from "react-native";
import React from "react";
import Header from "../section/Header";
import Balance from "../section/Balance";
import { StyledSafeAreaView } from "../styles";
import UserInfo from "../section/userInfo";

export default function ProfileScreen() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const page = "profile";
  return (
    <StyledSafeAreaView>
      <Header page={page}></Header>
      <UserInfo/>
      <View className={" dark:bg-neutral-900 dark:text-white"}>
        <Balance />
      </View>
    </StyledSafeAreaView>
  );
}
