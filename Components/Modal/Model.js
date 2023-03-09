import { StyleSheet, Text, View, Modal } from "react-native";
import React from "react";

const Model = ({ visible, onRequestClose, children }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}
    >
      {children}
    </Modal>
  );
};

export default Model;

const styles = StyleSheet.create({});
