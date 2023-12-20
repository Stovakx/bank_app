import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StyledSafeAreaView, StyledText } from "../styles";
import Header from "../section/Header";
import { settings } from "../utils/data";
import { useNavigation } from "@react-navigation/native";

const SettingsScreen = () => {
  const navigation = useNavigation();
  const page = "Settings";

  const logout = () => {
    // Logika pro odhlášení
  };

  return (
    <StyledSafeAreaView>
      <Header page={page} />
      <View className="mt-4 space-y-4 ml-4">
        {settings.map((item, id) => (
          <TouchableOpacity
            key={id}
            onPress={() =>
              item.id === 8 ? logout() : navigation.navigate("Setting", { item, page })
            }
          >
            <StyledText className="text-xl font-semibold">{item.name}</StyledText>
          </TouchableOpacity>
        ))}
      </View>
    </StyledSafeAreaView>
  );
};

export default SettingsScreen;
