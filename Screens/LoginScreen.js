import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import React from "react";
import Nav from "../Components/Nav/Nav";
import { APP_ICONS, COLORS } from "../Context/settings";
import Input from "../Components/Input/Input";
import Button from "../Components/Button/Button";

const LoginScreen = () => {
  return (
    <View style={styles.outline}>
      <Nav title={"Foodie"} />
      <View style={styles.section}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.text}>
          Cillum irure officia ex ipsum anim. Officia ut cillum laboris ipsum
          nostrud excepteur exercitation ea.
        </Text>
      </View>
      <View>
        <Input placeholder={"Username"} icon={APP_ICONS.USER} />
        <Input
          placeholder={"••••••••"}
          icon={APP_ICONS.KEY}
          secureTextEntry={true}
        />
        <Button title={"Continue"} icon={APP_ICONS.ARROW} />
      </View>
    </View>
  );
};

export default LoginScreen;

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
  },
  text: {
    color: "gray",
    fontWeight: "500",
    fontSize: 12
  }
});
