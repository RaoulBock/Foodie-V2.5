import { StyleSheet, Text, View } from "react-native";
import React from "react";

function search(data, query) {
  const results = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].title.includes(query) || data[i].description.includes(query)) {
      results.push(data[i]);
    }
  }

  return results;
}

export default search;

const styles = StyleSheet.create({});
