import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageCard from "../Cards/ImageCard";

const Modal = ({ dataset }) => {
  return (
    <View style={styles.outline}>
      {dataset && (
        <View>
          {dataset.map((e, i) => {
            return <ImageCard key={i} item={e} />;
          })}
        </View>
      )}
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({
  outline: {
    width: "100%",
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: "50%",
    bottom: 0,
    position: "absolute",
    paddingVertical: 20,
    elevation: 10,
  },
});
