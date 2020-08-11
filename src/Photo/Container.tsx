import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Introduction from "./Introduction/Container";
import Logo from "./Logo/Container";

const Container = (): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Logo />
      <Introduction />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Container;
