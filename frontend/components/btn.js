import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function Btn({ onPress, style, text, starCol, middleCol, endCol }) {
  return (
    <TouchableOpacity onPress={onPress} className="mt-3" >
      <LinearGradient
      style={style}
      start={{x:0, y:.5}}
      end={{x:1, y:.5}}
      colors={[starCol, middleCol, endCol]}
      >
        <Text className="text-white font-semibold text-lg">{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
