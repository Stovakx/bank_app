import { Text, View } from "react-native";
import React from "react";
import Header from "../section/Header";
import { StyledSafeAreaView, StyledText } from "../styles/styles";
import { useNavigation } from "@react-navigation/native";
import Btn from "../components/btn";
export default function DetailScreen({ route }) {
  const data = route.params?.data || null;
  const navigation = useNavigation();

  return (
    <StyledSafeAreaView>
      <Header />

      <View className="mt-6">
        {data.typeOfNoti === "transactions" || data.type === "transaction" ? (
          <>
            <View className="space-y-4 ">
              <StyledText className="text-3xl font-bold">
                {data.name}
              </StyledText>
              <View className="flex-row justify-between items-center">
                <StyledText className="text-xl font-semibold">
                  {data.description}
                </StyledText>
                <StyledText className="text-xl font-bold">
                  {data.amount}
                </StyledText>
              </View>
            </View>
            <View className="flex-row mt-3 justify-between">
              <View className="flex-col space-y-3">
                <StyledText className="font-semibold">
                  Variable Symbol: {data.variableSymbol}
                </StyledText>
                <StyledText className="font-semibold">
                  {data.date} {data.time}
                </StyledText>
              </View>
              {data.typeOfTransaction === "costs" ? (
                <View className="flex-col space-y-3 ">
                  <StyledText className="font-semibold">
                    From: {data.from.userName}
                  </StyledText>
                  <StyledText className="font-semibold">
                    To: {data.to.bankAcount}/{data.to.bankCode}
                  </StyledText>
                </View>
              ) : (
                <View className="flex-col space-y-3 ">
                  <StyledText className="font-semibold">
                    From: {data.from.bankAcount}/{data.from.bankCode}
                  </StyledText>
                </View>
              )}
            </View>
            <View></View>
            <View className="flex-row justify-end">
              <Btn
                className=" w-36 h-12  rounded-lg items-center justify-center "
                starCol={"#6366f1"}
                middleCol={"#a855f7"}
                endCol={"#ec4899"}
                text={"Report payment"}
              />
            </View>
          </>
        ) : data.typeOfNoti === "cashback" ? (
          <>
            <View className="space-y-4 ">
              <StyledText className="text-3xl font-bold">
                {data.name}
              </StyledText>
              <View className="flex-row justify-between items-center">
                <StyledText className="text-xl font-semibold">
                  {data.description}
                </StyledText>
              </View>
              <View className="flex-row justify-end items-center">
                <StyledText className="text-xl font-bold">
                  Cashback amount: {data.amount}
                </StyledText>
              </View>
            </View>
            <View className="flex-row justify-end">
              <Btn
                className="w-44 h-12  rounded-lg items-center justify-center "
                starCol={"#6366f1"}
                middleCol={"#a855f7"}
                endCol={"#ec4899"}
                text={"See all Cashbacks"}
              />
            </View>
          </>
        ) : data.typeOfNoti === "limit" ? (
          <>
            <View className="space-y-4 ">
              <StyledText className="text-3xl font-bold">
                {data.name}
              </StyledText>
              <View className="flex-row justify-between items-center">
                <StyledText className="text-xl font-semibold">
                  {data.description} {data.card}.
                </StyledText>
              </View>
              <View className="flex-row justify-end items-center">
                <StyledText className="text-xl font-bold">
                  Cashback amount: {data.amount}
                </StyledText>
              </View>
            </View>
            <View className="flex-row justify-end">
              <Btn
                className=" w-36 h-12  rounded-lg items-center justify-center "
                starCol={"#6366f1"}
                middleCol={"#a855f7"}
                endCol={"#ec4899"}
                text={"Limits"}
              />
            </View>
          </>
        ) : data.typeOfNoti === "security" ? (
          <>
            <View className="space-y-4 ">
              <StyledText className="text-3xl font-bold">
                {data.name}
              </StyledText>
              <View className="flex-row justify-between items-center">
                <StyledText className="text-xl font-semibold">
                  {data.description}
                </StyledText>
              </View>
              <View className="flex-row justify-end items-center">
                <StyledText className="text-xl font-bold">
                  Pro ověření indetify klikněte níže
                </StyledText>
              </View>
            </View>
            <View className="flex-row justify-end">
              <Btn
                onPress={() => navigation.navigate("Settings")}
                className=" w-36 h-12  rounded-lg items-center justify-center "
                starCol={"#6366f1"}
                middleCol={"#a855f7"}
                endCol={"#ec4899"}
                text={"Settings"}
              />
            </View>
          </>
        ) : data.typeOfNoti === "Bonuses" ? (
          <>
            <View className="space-y-4 ">
              <StyledText className="text-3xl font-bold">
                {data.name}
              </StyledText>
              <View className="flex-row justify-between items-center">
                <StyledText className="text-xl font-semibold">
                  {data.description}
                </StyledText>
              </View>
              <View className="flex-row justify-end items-center">
                <StyledText className="text-xl font-bold">
                  Pro všechny bonusy klikněte níže
                </StyledText>
              </View>
            </View>
            <View className="flex-row justify-end">
              <Btn
                className=" w-36 h-12  rounded-lg items-center justify-center "
                starCol={"#6366f1"}
                middleCol={"#a855f7"}
                endCol={"#ec4899"}
                text={"See bonuses"}
              />
            </View>
          </>
        ) : data.typeOfNoti === "maturity" ? (
          <>
            <View className="space-y-4 ">
              <StyledText className="text-3xl font-bold">
                {data.name}
              </StyledText>
              <View className="flex-row justify-between items-center">
                <StyledText className="text-xl font-semibold">
                  {data.description}
                </StyledText>
              </View>
            </View>
            <View className="flex-row justify-end mt-4">
              <Btn
                className=" w-48 h-12  rounded-lg items-center justify-center "
                starCol={"#6366f1"}
                middleCol={"#a855f7"}
                endCol={"#ec4899"}
                text={"permanent payments"}
              />
            </View>
          </>
        ) : (
          <>
            <View className="space-y-4 ">
              <StyledText className="text-3xl font-bold">
                {data.name}
              </StyledText>
              <View className="flex-row justify-between items-center">
                <StyledText className="text-xl font-semibold">
                  {data.description}
                </StyledText>
              </View>
            </View>
            <View className="flex-row justify-end">
              <Btn
                className=" w-36 h-12  rounded-lg items-center justify-center "
                starCol={"#6366f1"}
                middleCol={"#a855f7"}
                endCol={"#ec4899"}
                text={"More info"}
              />
            </View>
          </>
        )}
      </View>
    </StyledSafeAreaView>
  );
}
4;
