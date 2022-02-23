import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import BodyText from "./BodyText";
import Colors from "../constants/colors";

const MainButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.button}>
        <BodyText style={styles.buttonText}>{props.children}</BodyText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 10,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default MainButton;
