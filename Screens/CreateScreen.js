import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  TouchableOpacity
} from "react-native";
import React from "react";
import PageNav from "../Components/Nav/PageNav";
import { AppContext } from "../Context/AppContext";
import {
  APP_PAGES,
  COLORS,
  METHOD_TYPE,
  PAYMENT_METHOD
} from "../Context/settings";
import CreateInput from "../Components/Input/CreateInput";
import OptionsBtn from "../Components/Button/OptionsBtn";

const CreateScreen = () => {
  const { setNavPage, userData } = React.useContext(AppContext);

  const [mainMethod, setMainMethod] = React.useState("Rent");
  const [mainPayment, setMainPayment] = React.useState("/PM");

  console.log(mainMethod);
  return (
    <View style={styles.outline}>
      <PageNav
        title={"Create"}
        onPress={() => setNavPage(APP_PAGES.APP.HOME)}
      />
      <View style={styles.section}>
        <Text style={styles.title}>Start selling today?</Text>
        {userData.account_verification === false && (
          <Text>
            Your account is not yet verified. To continue using this feature
            make sure to verify your account by locating to settings
          </Text>
        )}
      </View>

      <View style={styles.section}>
        <View>
          <CreateInput
            label={"Address"}
            placeholder={"456 Oak St, Smallville, USA"}
          />
        </View>
        <View style={styles.formCtrl}>
          <CreateInput
            label={"Price"}
            placeholder={"2000"}
            keyboardType={"numeric"}
          />
        </View>

        <View style={[styles.formCtrl, styles.grid]}>
          {PAYMENT_METHOD.map((e, i) => {
            return (
              <OptionsBtn
                key={i}
                style={mainPayment === e.name ? styles.active : styles.btn}
                onPress={() => setMainPayment(e.name)}
                textstyle={
                  mainPayment === e.name ? styles.textActive : styles.text
                }
                title={e.name}
              />
            );
          })}
        </View>

        <View style={styles.formCtrl}>
          <CreateInput
            label={"Contact"}
            placeholder={""}
            keyboardType={"numeric"}
            value={userData.account_phone}
          />
        </View>

        <View style={[styles.formCtrl, styles.grid]}>
          {METHOD_TYPE.map((e, i) => {
            return (
              <OptionsBtn
                key={i}
                style={mainMethod === e.name ? styles.active : styles.btn}
                onPress={() => setMainMethod(e.name)}
                textstyle={
                  mainMethod === e.name ? styles.textActive : styles.text
                }
                title={e.name}
              />
            );
          })}
        </View>
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
  },
  formCtrl: {
    marginTop: 50
  },
  btn: {
    borderWidth: 1,
    borderColor: "#eee",
    padding: 10,
    borderRadius: 10,
    width: 100,
    marginHorizontal: 10,
    alignItems: "center"
  },
  active: {
    borderWidth: 1,
    borderColor: "#ea5c10",
    padding: 10,
    borderRadius: 10,
    width: 100,
    marginHorizontal: 10,
    alignItems: "center",
    backgroundColor: "#ed6f2c"
  },
  grid: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontWeight: "500",
    color: "#404040"
  },
  textActive: {
    fontWeight: "500",
    color: "#fff"
  }
});
