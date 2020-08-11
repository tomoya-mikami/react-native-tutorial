import React from "react";
import { Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
});

const Container = (): React.ReactElement => {
  return (
    <Image
      source={{ uri: "https://i.imgur.com/TkIrScD.png" }}
      style={styles.logo}
    />
  );
};

export default Container;
