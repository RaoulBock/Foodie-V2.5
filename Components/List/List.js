import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../Context/settings";

const List = ({ item }) => {
  return (
    <TouchableOpacity style={styles.outline}>
      <Text>{item.icon}</Text>
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  outline: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30
  },
  text: {
    paddingHorizontal: 15,
    color: COLORS.TEXT_COLOR,
    fontSize: 25,
    fontWeight: "700"
  }
});
