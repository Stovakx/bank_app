import React from "react";
import { useColorScheme } from "nativewind";
import { Text, StyleSheet, View, TextInput } from "react-native";

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
  