import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_ICONS, COLORS } from "../../Context/settings";

const PageNav = ({ onPress, title, onSave }) => {
  return (
    <View style={styles.outline}>
      <TouchableOpacity onPress={onPress} style={styles.btn}>
        <Text>{APP_ICONS.BACK}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onSave}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PageNav;

const styles = StyleSheet.create({
  outline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
    paddingVertical: 10
  },
  title: {
    color: COLORS.TEXT_COLOR,
    fontSize: 25,
    fontWeight: "700"
  },
  btn: {
    backgroundColor: "#ed6f2c",
    padding: 5,
    borderRadius: 50
  }
});
