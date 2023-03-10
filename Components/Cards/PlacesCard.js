import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_ICONS, COLORS } from "../../Context/settings";

const PlacesCard = ({ item }) => {
  return (
    <TouchableOpacity style={styles.outline} activeOpacity={0.9}>
      <Image source={{ uri: item.images }} style={styles.image} />
      <View style={styles.info}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>{APP_ICONS.CUBE}</Text>
          <Text style={[styles.desc, { paddingHorizontal: 5 }]}>
            {item.description_2}
          </Text>
        </View>
        <Text style={styles.amount}>
          ${item.amount} NAM{" "}
          <Text style={{ color: "gray", fontWeight: "400", fontSize: 18 }}>
            {item.payment_type === "/pm" && "/Month"}
          </Text>
        </Text>
        <Text style={styles.title}>{item.address}</Text>

        <View style={[styles.grid, { marginTop: 10 }]}>
          <View style={styles.gridFit}>
            <Text style={styles.gridIcon}>{APP_ICONS.BED}</Text>
            <Text style={styles.text}>{item.description[0]}</Text>
          </View>
          <View style={styles.gridFit}>
            <Text style={styles.gridIcon}>{APP_ICONS.BATH}</Text>
            <Text style={styles.text}>{item.description[1]}</Text>
          </View>
          <View style={styles.gridFit}>
            <Text style={styles.gridIcon}>{APP_ICONS.FEET}</Text>
            <Text style={styles.text}>{item.description[2]}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PlacesCard;

const styles = StyleSheet.create({
  outline: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 10,
    marginHorizontal: 10
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
    color: "gray",
    fontSize: 12
  },
  desc: {
    color: "#ed6f2c",
    fontWeight: "500"
  },
  amount: {
    color: "#404040",
    fontSize: 30,
    fontWeight: "700"
  },
  grid: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10
  },
  gridFit: {
    flexDirection: "row",
    alignItems: "center"
  },
  gridIcon: {
    backgroundColor: "#eee",
    padding: 4,
    borderRadius: 50
  },
  text: {
    paddingHorizontal: 5,
    fontWeight: "700",
    color: "#404040"
  }
});
