import React from "react";
import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  instructions: {
    color: "#888",
    fontSize: 18,
    marginHorizontal: 15,
  },
});

const Container = (): React.ReactElement => {
  return (
    <Text style={styles.instructions}>
      To share a photo from your phone with a friend, just press the button
      below!
    </Text>
  );
};

export default Container;
