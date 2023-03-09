import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { AppContext } from "../../Context/AppContext";
import { COLORS } from "../../Context/settings";

const ModelNav = ({ title, onPress, icon }) => {
  const { setShowModal, showModal } = React.useContext(AppContext);

  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text>{icon}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModelNav;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  title: {
    color: COLORS.TEXT_COLOR,
    fontWeight: "700",
    fontSize: 50
  }
});
