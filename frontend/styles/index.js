import { StatusBar } from "react-native";
import React from "react";
import { useColorScheme } from "nativewind";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const StyledSafeAreaView = ({ children }) => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <SafeAreaView
      className={`p-6 h-full ${
        colorScheme === "dark" ? "dark:bg-neutral-900" : ""
      }`}
      style={{ backgroundColor: colorScheme === "dark" ? "#171717" : "white" }}
    >
      <StatusBar style={colorScheme == "dark" ? "light" : "dark"} />
      {children}
    </SafeAreaView>
  );
};

export const StyledText = ({ style, children }) => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <Text
      style={[{ color: colorScheme === "dark" ? "white" : "black" }, style]}
    >
      {children}
    </Text>
  );
};

export const CustomTextInput = ({ value, onChange, label,secureTextEntry }) => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={value}
          onChangeText={onChange}
          secureTextEntry={secureTextEntry}
        />
        <Text
          style={[
            styles.label,
            { top: isFocused || value ? -12 : 12, color: colorScheme === "dark" ? "white" : "#18181b" },
          ]}
        >
          {label}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  inputContainer: {
    position: 'relative',
  },
  input: {
    borderBottomWidth: 2,
    borderColor: 'gray',
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  label: {
    position: 'absolute',
    left: 10,
    fontSize: 16,
    color: 'gray',
  },
});
