import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import React from "react";
import Nav from "../Components/Nav/Nav";
import { COLORS } from "../Context/settings";

const HomeScreen = () => {
  return (
    <View style={styles.outline}>
      <Nav title={"Picafy"} />

      <View style={styles.section}>
        <Text style={styles.title}>Find Awesome Photos</Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fdfdfd",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  section: {
    marginTop: 40,
    marginHorizontal: 20,
  },
  title: {
    color: COLORS.TEXT_COLOR,
    fontWeight: "700",
    fontSize: 50,
  },
});
