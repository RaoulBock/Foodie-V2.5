import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_ICONS, APP_PAGES, COLORS } from "../../Context/settings";
import { AppContext } from "../../Context/AppContext";

const Nav = ({ title }) => {
  const { showModal, setShowModal, navPage } = React.useContext(AppContext);

  return (
    <View style={styles.outline}>
      <Text style={styles.title}>{title}</Text>
      {navPage === APP_PAGES.APP.LOGIN ? null : (
        <TouchableOpacity onPress={() => setShowModal(true)}>
          <Text>{APP_ICONS.MENU}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({
  outline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10
  },
  title: {
    color: COLORS.TEXT_COLOR,
    fontSize: 25,
    fontWeight: "700"
  }
});
