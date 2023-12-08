import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaView,  } from "react-native-safe-area-context";
import Card from "../section/Card";
import Transactions from "../section/Transactions";
import Header from "../section/Header";
import { useColorScheme } from "nativewind";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

export default function HomeScreen() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const [fontsLoaded, fontError] = useFonts({
    SpaceGroteskSemibold: require("../assets/fonts/SpaceGrotesk-SemiBold.ttf"),
    SpaceGroteskBold: require("../assets/fonts/SpaceGrotesk-Bold.ttf"),
    SpaceGroteskMedium: require("../assets/fonts/SpaceGrotesk-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView className="p-6 dark:bg-neutral-900">
      <StatusBar style={colorScheme == "dark" ? "light" : "dark"} />

      <View onLayout={onLayoutRootView}>
        <View className="my-6">
          <Header />

          <Card />

          <Transactions />
        </View>
      </View>
    </SafeAreaView>
  );
}
