import React from "react";
import { Image, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

const styles = StyleSheet.create({
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
});

interface ContainerProps {
  pickPhoto: ImagePicker.ImagePickerResult;
}

const Container = (props: ContainerProps): React.ReactElement => {
  const uri = props.pickPhoto.cancelled
    ? "https://i.imgur.com/TkIrScD.png"
    : props.pickPhoto.uri;
  return <Image source={{ uri: uri }} style={styles.logo} />;
};

export default Container;
