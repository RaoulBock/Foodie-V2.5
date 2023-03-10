import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const OptionsBtn = ({ title, onPress, style, textstyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text style={textstyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default OptionsBtn;

const styles = StyleSheet.create({});
