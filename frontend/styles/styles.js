import { StatusBar } from "react-native";
import React from "react";
import { useColorScheme, useEffect } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const StyledSafeAreaView = ({ children }) => {
    const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <SafeAreaView
      className={`p-6 h-full ${colorScheme === "dark" ? "dark:bg-neutral-900" : ""}`}
      style={{backgroundColor: colorScheme === "dark" ? "#171717" : "white"}}
    >
     <StatusBar style={colorScheme == "dark" ? "light" : "dark"} />
      {children}
    </SafeAreaView>
  );
};

// Nefunguje stylizace v komponentách.. 
export const StyledText = ({ style, children }) => {
    const { colorScheme, toggleColorScheme } = useColorScheme();
    return (
      <Text style={[{ color: colorScheme === "dark" ? "white" : "black" }, style]} >
        {children}
      </Text>
    );
  };
