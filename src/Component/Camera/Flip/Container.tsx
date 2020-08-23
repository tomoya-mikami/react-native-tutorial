/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Camera } from "expo-camera";

const style = StyleSheet.create({
  flip: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  view: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: "white",
  },
});

interface ContainerProps {
  type: any;
  setType: (type: any) => void;
}

const Container = (props: ContainerProps): React.ReactElement => {
  return (
    <View style={style.view}>
      <TouchableOpacity
        style={style.flip}
        onPress={() => {
          props.setType(
            props.type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
          );
        }}
      >
        <Text style={style.text}> Flip </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Container;
