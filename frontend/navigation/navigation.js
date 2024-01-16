import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import DetailScreen from "../screens/DetailScreen";
import SettingScreen from "../screens/SettingScreen";
import AllTransactionsScreen from  "../screens/AllTransactionsScreen";
const Stack = createNativeStackNavigator();


export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen name="Notifications" options={{presentation: "modal"}} component={NotificationScreen}/>
        <Stack.Screen name="Settings" component={SettingsScreen}/>
        <Stack.Screen name="DetailScreen" component={DetailScreen} options={{presentation:"modal",}}/>
        <Stack.Screen name="Setting" component={SettingScreen} options={{presentation:"fullScreenModal"}}/>
        <Stack.Screen name="AllTransactionsScreen" component={AllTransactionsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
