import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Image
} from "react-native";
import React from "react";
import Nav from "../Components/Nav/Nav";
import { APP_ICONS, APP_PAGES, COLORS } from "../Context/settings";
import Input from "../Components/Input/Input";
import Button from "../Components/Button/Button";
import { ApiServices } from "../utils/ApiServices";
import { AppContext } from "../Context/AppContext";

const LoginScreen = () => {
  const [userEmail, setUserEmail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [errMsg, setErrMsg] = React.useState("");

  const { userData, setUserData, setNavPage } = React.useContext(AppContext);

  React.useEffect(() => {
    console.log(userData);
  }, [userData]);

  const onLogin = async () => {
    if (userEmail === "" || userPassword === "") {
      setErrMsg("Provide the necessary information to continue.");
    } else {
      try {
        const response = await ApiServices.on_login({
          email: userEmail,
          password: userPassword
        });

        if (response.token) {
          setUserData({
            account_name: response.user.name,
            account_email: response.user.email,
            account_type: response.user.account_type,
            account_phone: response.user.phone,
            account_verification: response.user.account_verification,
            account_image: response.user.image
          });
        }

        setNavPage(APP_PAGES.APP.HOME);
      } catch (err) {
        console.log(err);
        setErrMsg(`Something went wrong, please try again later ${err}`);
      }
    }
  };

  return (
    <View style={styles.outline}>
      <Nav title={"Foodie"} />
      <Image
        source={{
          uri: "https://cdn.dribbble.com/users/5283725/screenshots/12191223/media/e19c09e51d8703bb170a2b09140b803e.png"
        }}
        style={styles.image}
      />
      <View style={styles.section}>
        <Text style={styles.err}>{errMsg}</Text>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.text}>
          Cillum irure officia ex ipsum anim. Officia ut cillum laboris ipsum
          nostrud excepteur exercitation ea.
        </Text>
      </View>
      <View>
        <Input
          placeholder={"Someone@somehing.com"}
          icon={APP_ICONS.USER}
          onChangeText={(e) => setUserEmail(e)}
        />
        <Input
          placeholder={"••••••••"}
          icon={APP_ICONS.KEY}
          secureTextEntry={true}
          onChangeText={(e) => setUserPassword(e)}
        />
        <Button title={"Continue"} icon={APP_ICONS.ARROW} onPress={onLogin} />
        <Text>{}</Text>
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
  },
  image: {
    width: "100%",
    height: 200,
    flex: 1
  },
  err: {
    color: "red",
    fontWeight: "500"
  }
});
