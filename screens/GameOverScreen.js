import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={1000}
          style={styles.image}
          source={require("../assets/success.png")}
          // source={{
          //   uri: "https://static01.nyt.com/images/2021/01/20/sports/19ALTsummit-k2-2-print/19summit-k2-2-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
          // }}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          You phone needed{" "}
          <Text style={styles.highlight}>{props.guessRounds}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>.
        </BodyText>
      </View>

      <MainButton onPress={props.startNewGame}>NEW GAME</MainButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },

  highlight: {
    color: Colors.accent,
    fontFamily: "open-sans-bold",
  },

  resultText: {
    textAlign: "center",
    fontSize: 20,
  },

  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
});
