import { Image, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { StyledText } from "../styles";
import { person } from "../utils/data";
import * as Icon from "react-native-heroicons/outline";
import { useColorScheme } from "nativewind";

const UserInfo = () => {
  const [showPassword, setshowPassword] = useState(false);
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const showPw = () => {
    setshowPassword(!showPassword);
  };

  //TODO: shadow box? or something like that,
  return (
    <View className="my-4 flex-col ">
      <View className="overflow-hidden my-2 items-center">
        <Image
          source={person[0].profilePicture}
          style={{
            width: 150,
            height: 150,
          }}
          className="rounded-full"
        />
      </View>
      <View className="space-y-2 flex-col">
        <StyledText className="text-lg">{person[0].firstName}</StyledText>
        <StyledText className="text-lg">{person[0].lastName}</StyledText>
        <StyledText className="text-lg">{person[0].email}</StyledText>
        <StyledText className="text-lg">{person[0].phoneNumber}</StyledText>
        <View className="flex-row space-x-3">
          <StyledText className={"text-lg"}>
            {showPassword ? person[0].pw : "*********"}
          </StyledText>
          <TouchableOpacity onPress={showPw} className="absolute left-40">
            <Icon.LockClosedIcon
              size={26}
              color={colorScheme == "dark" ? "white" : "black"}
            />
          </TouchableOpacity>
        </View>
        <View>
          <StyledText className="text-lg">Your acount was created:</StyledText>
          <StyledText className="text-lg">{person[0].createdAt}</StyledText>
        </View>
      </View>
    </View>
  );
};

export default UserInfo;
