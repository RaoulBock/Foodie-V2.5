import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import React from "react";
import PageNav from "../Components/Nav/PageNav";
import { AppContext } from "../Context/AppContext";
import { APP_PAGES, COLORS } from "../Context/settings";

const CreateScreen = () => {
  const { setNavPage } = React.useContext(AppContext);
  return (
    <View style={styles.outline}>
      <PageNav
        title={"Create"}
        onPress={() => setNavPage(APP_PAGES.APP.HOME)}
      />
      <View style={styles.section}>
        <Text style={styles.title}>Start selling today?</Text>
      </View>
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fdfdfd"
  },
  section: {
    marginTop: 40,
    marginHorizontal: 20
  },
  title: {
    color: COLORS.TEXT_COLOR,
    fontWeight: "700",
    fontSize: 50
  }
});
