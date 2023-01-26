import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Nav = ({ title }) => {
  return (
    <View style={styles.outline}>
      <Text>{title}</Text>
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({
  outline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
