import { View, Text, Image, Switch, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import * as Icon from "react-native-heroicons/outline";
import { useColorScheme } from "nativewind";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

export default function Header({ page }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const navigation = useNavigation();

  return (
    <Animated.View
      className="flex-row justify-between items-center mx-4"
      entering={FadeInDown.duration(500).springify().delay(100)}
    >
      <View className="border-2 border-white rounded-full overflow-hidden my-4">
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image
            source={require("../assets/images/avatar.png")}
            style={{
              width: 45,
              height: 45,
            }}
          />
        </TouchableOpacity>
      </View>

      {/* Notifications and Switch Icon */}
      <View className="flex-row space-x-4 justify-center items-center">
        {page === "profile" ? (
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <Icon.Cog8ToothIcon
              size={30}
              strokeWidth={2}
              color={colorScheme == "dark" ? "white" : "black"}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => navigation.navigate("Notifications")}
          >
            <Icon.BellIcon
              size={30}
              strokeWidth={2}
              color={colorScheme == "dark" ? "white" : "black"}
            />
          </TouchableOpacity>
        )}

        <Switch
          value={colorScheme == "dark"}
          onChange={toggleColorScheme}
          trackColor={{ false: "", true: "#4a72f5" }}
          onValueChange={toggleSwitch}
        />
      </View>
    </Animated.View>
  );
}
