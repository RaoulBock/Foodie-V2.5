import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../Context/settings";

const ImageCard = ({ item }) => {
  return (
    <View style={styles.outline}>
      <View style={styles.grid}>
        {/* <Image source={profile_image} /> */}
        <Text style={styles.text}>{item.created_at}</Text>
      </View>
      {/* <Image source={img} style={styles.img} /> */}
    </View>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  img: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  grid: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: COLORS.TEXT_COLOR,
    fontWeight: "500",
  },
});
