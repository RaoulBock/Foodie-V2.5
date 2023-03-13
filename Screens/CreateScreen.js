import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import React from "react";
import PageNav from "../Components/Nav/PageNav";
import { AppContext } from "../Context/AppContext";
import {
  APP_ICONS,
  APP_PAGES,
  COLORS,
  METHOD_TYPE,
  PAYMENT_METHOD
} from "../Context/settings";
import CreateInput from "../Components/Input/CreateInput";
import OptionsBtn from "../Components/Button/OptionsBtn";
import Button from "../Components/Button/Button";

import * as ImagePicker from "expo-image-picker";
import DescriptionInput from "../Components/Input/DescriptionInput";
import { ApiServices } from "../utils/ApiServices";

const CreateScreen = () => {
  const { setNavPage, userData } = React.useContext(AppContext);

  const [mainMethod, setMainMethod] = React.useState("Apartment");
  const [mainPayment, setMainPayment] = React.useState("Renting");

  const [images, setImages] = React.useState([]);
  const [userDescription, setUserDescription] = React.useState([
    bedCount,
    bathCount,
    sqrCount
  ]);

  const [bedCount, setBedCount] = React.useState("");
  const [bathCount, setBathCount] = React.useState("");
  const [sqrCount, setSqrCount] = React.useState("");

  const [userAddress, setUserAddress] = React.useState("");
  const [userPrice, setUserPrice] = React.useState("");

  const [errorMsg, setErrorMsg] = React.useState("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1
    });

    if (!result.cancelled) {
      setImages(result.assets);
    }
  };

  const handlePost = async () => {
    if (userAddress === "" || userPrice === "" || mainPayment === "") {
      setErrorMsg(
        "Please provide the correct information before you continue."
      );
    } else {
      const response = await ApiServices.on_post_house({
        streetName: userAddress,
        description: userDescription,
        description_2: mainMethod,
        images: images,
        contactNumber: userData.account_phone,
        method_type: mainPayment
      });

      if (response) {
        console.log("Response house posting confirmed");
      } else {
        console.log("REsponse failed to post");
      }
    }
  };

  return (
    <View style={styles.outline}>
      <PageNav
        title={"Create"}
        onPress={() => setNavPage(APP_PAGES.APP.HOME)}
        onSave={handlePost}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
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
              onChangeText={(e) => setUserAddress(e)}
            />
          </View>

          <View style={[styles.formCtrl, styles.grid]}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
            </ScrollView>
          </View>

          <View style={styles.formCtrl}>
            <CreateInput
              label={"Price"}
              placeholder={"2000"}
              keyboardType={"numeric"}
              onChangeText={(e) => setUserPrice(e)}
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

          <View
            style={[
              styles.formCtrl,
              styles.grid,
              { justifyContent: "space-between" }
            ]}
          >
            <DescriptionInput
              icon={APP_ICONS.BED}
              keyboardType={"numeric"}
              onChangeText={(e) => setBedCount(e)}
            />
            <DescriptionInput
              icon={APP_ICONS.BATH}
              keyboardType={"numeric"}
              onChangeText={(e) => setBathCount(e)}
            />
            <DescriptionInput
              icon={APP_ICONS.FEET}
              keyboardType={"numeric"}
              onChangeText={(e) => setSqrCount(e)}
            />
          </View>

          <View style={[styles.formCtrl, styles.grid]}>
            <Button
              title={"Upload images"}
              icon={APP_ICONS.IMAGES}
              onPress={pickImage}
            />
          </View>

          <View style={[styles.formCtrl, { marginBottom: 50 }]}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {images.map((image) => (
                <Image
                  source={{ uri: image.uri }}
                  key={image.uri}
                  style={styles.createdImage}
                />
              ))}
            </ScrollView>
          </View>

          {/* <View style={[styles.formCtrl, styles.grid]}>
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
        </View> */}
        </View>
      </ScrollView>
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
    alignItems: "center",
    backgroundColor: "#ed6f2c"
  },
  grid: {
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    fontWeight: "500",
    color: "#404040"
  },
  textActive: {
    fontWeight: "500",
    color: "#fff"
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    top: -10,
    position: "absolute",
    backgroundColor: "#fff",
    zIndex: 9,
    left: 10
  },
  createdImage: {
    width: 150,
    height: 200,
    marginHorizontal: 10,
    borderRadius: 10
  }
});
