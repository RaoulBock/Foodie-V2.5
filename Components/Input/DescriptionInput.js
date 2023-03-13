import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { APP_ICONS } from "../../Context/settings";

const DescriptionInput = ({ icon, keyboardType, onChangeText }) => {
  return (
    <View style={styles.outline}>
      <Text>{icon}</Text>
      <TextInput
        style={styles.input}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default DescriptionInput;

const styles = StyleSheet.create({
  input: {
    width: 60,
    backgroundColor: "#eee",
    borderRadius: 10,
    marginHorizontal: 10,
    textAlign: "center",
    fontWeight: "700",
    color: "#404040"
  },
  outline: {
    flexDirection: "row",
    alignItems: "center"
  }
});
