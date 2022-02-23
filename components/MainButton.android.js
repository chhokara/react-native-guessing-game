import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

import BodyText from "./BodyText";
import Colors from "../constants/colors";

const MainButton = (props) => {
  let ButtonComponent = TouchableNativeFeedback;

  if (Platform.Version < 21) {
    ButtonComponent = TouchableOpacity;
  }

  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent onPress={props.onPress}>
        <View style={styles.button}>
          <BodyText style={styles.buttonText}>{props.children}</BodyText>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 10,
    overflow: "hidden",
  },
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
