import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../Context/settings";

const PlacesCard = ({ item }) => {
  return (
    <TouchableOpacity style={styles.outline}>
      <Image source={{ uri: item.images }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlacesCard;

const styles = StyleSheet.create({
  outline: {
    width: 300,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 10,
    marginRight: 10
  },
  image: {
    width: "100%",
    height: 200
  },
  info: {
    padding: 10
  },
  title: {
    fontWeight: "500",
    color: "#404040"
  }
});
