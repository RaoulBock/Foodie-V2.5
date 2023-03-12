import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { APP_ICONS } from "../../Context/settings";

const DescriptionInput = ({ icon }) => {
  return (
    <View style={styles.outline}>
      <Text>{icon}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

export default DescriptionInput;

const styles = StyleSheet.create({
  input: {
    width: 30,
    backgroundColor: "#eee",
    borderRadius: 10,
    marginHorizontal: 10
  },
  outline: {
    flexDirection: "row",
    alignItems: "center"
  }
});
