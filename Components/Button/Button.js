import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../Context/settings";

const Button = ({ title, onPress, icon }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.outline}>
      <Text style={styles.title}>{title}</Text>
      <Text style={{ paddingHorizontal: 10 }}>{icon}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  outline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: COLORS.TEXT_COLOR,
    fontSize: 20,
    fontWeight: "700"
  }
});
