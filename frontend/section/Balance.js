import { View } from "react-native";
import React from "react";
import { StyledText } from "../styles";
import { sum } from "../utils/data";
import Btn from "../components/btn";
import { useNavigation } from "@react-navigation/native";

const Balance = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-row">
      <View>
        <StyledText className="text-2xl font-bold">
          Your total balance:
        </StyledText>
        <StyledText className="text-xl font-semibold">$ {sum}</StyledText>
      </View>
      <View className="ml-10 ">
        <Btn text={"More info"} starCol={"#e879f9"} endCol={"#a855f7"} middleCol={"#a21caf"} className="p-3 rounded-full" onPress={()=>navigation.navigate()}  />
      </View>
    </View>
  );
};

export default Balance;
