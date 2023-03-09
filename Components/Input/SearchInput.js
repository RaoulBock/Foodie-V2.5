import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { APP_ICONS } from "../../Context/settings";

const SearchInput = ({ placeholder, onChangeText }) => {
  return (
    <View style={styles.outline}>
      <Text style={styles.icon}>{APP_ICONS.SEARCH}</Text>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  outline: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#eee",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 50,
    width: "100%",
    marginVertical: 20
  },
  input: {
    width: "90%",
    padding: 10
  }
});
