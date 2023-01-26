import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Modal = ({ dataset }) => {
  return (
    <View style={styles.outline}>
      <Text style={styles.title}>{title}</Text>
      {dataset && (
        <View>
          {dataset.map((e, i) => {
            return <Text key={i}>{e}</Text>;
          })}
        </View>
      )}
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({});
