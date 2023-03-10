import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const CreateInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default CreateInput;

const styles = StyleSheet.create({
  inputContainer: {},
  label: {
    fontSize: 14,
    fontWeight: "bold",
    top: -10,
    position: "absolute",
    backgroundColor: "#fff",
    zIndex: 9,
    left: 10
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16
  }
});
