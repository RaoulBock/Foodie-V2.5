import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_ICONS, APP_PAGES, COLORS } from "../../Context/settings";
import { AppContext } from "../../Context/AppContext";

const Nav = ({ title }) => {
  const { setNavPage, setShowModal, navPage, userData } =
    React.useContext(AppContext);

  console.log(userData);

  return (
    <View style={styles.outline}>
      <Text style={styles.title}>
        {title}
        {userData && (
          <Text style={{ fontSize: 12 }}>
            {" "}
            • {userData.account_name} • {userData.account_type}
          </Text>
        )}
      </Text>
      {userData ? (
        <View>
          {navPage === APP_PAGES.APP.LOGIN ? null : (
            <View style={styles.grid}>
              {userData.account_verification === true && (
                <TouchableOpacity
                  style={{ paddingHorizontal: 20 }}
                  onPress={() => setNavPage(APP_PAGES.APP.CREATE)}
                >
                  <Text>{APP_ICONS.CREATE}</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity onPress={() => setShowModal(true)}>
                <Text>{APP_ICONS.MENU}</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      ) : (
        <TouchableOpacity onPress={() => setNavPage(APP_PAGES.APP.LOGIN)}>
          <Text>Login</Text>
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
    marginHorizontal: 10,
    paddingBottom: 10
  },
  title: {
    color: COLORS.TEXT_COLOR,
    fontSize: 25,
    fontWeight: "700"
  },
  grid: {
    flexDirection: "row",
    alignItems: "center"
  }
});
