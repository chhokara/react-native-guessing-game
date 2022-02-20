import React from "react";
import { View, StyleSheet } from "react-native";

import TitleText from "./TitleText";

const Header = (props) => {
  return (
    <View style={style.header}>
      <TitleText style={style.headerTitle}>{props.title}</TitleText>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: "#f7287b",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Header;
