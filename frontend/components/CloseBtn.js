import { View, Text, TouchableOpacity,  } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import * as Icon from "react-native-heroicons/outline";
import { useColorScheme } from "nativewind";

export default function CloseBtn() {
  const navigation = useNavigation();
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <>
      <TouchableOpacity onPress={()=>navigation.goBack()} className="mr-3" >
        <Icon.XMarkIcon size={36} color={colorScheme == "dark" ? "white" : "black"} />
      </TouchableOpacity>
    </>
  );
}
