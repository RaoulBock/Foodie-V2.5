import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const Input = ({ icon, placeholder, onChangeText, secureTextEntry }) => {
  return (
    <View style={styles.outline}>
      <Text style={styles.icon}>{icon}</Text>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  outline: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#eee",
    borderWidth: 1,
    borderRadius: 50,
    marginVertical: 20,
    marginHorizontal: 10
  },
  input: {
    width: "90%",
    padding: 10
  },
  icon: {
    paddingHorizontal: 15
  }
});
