import React from "react";
import { StyleSheet, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Introduction from "./Introduction/Container";
import Logo from "./Logo/Container";
import PickPhoto from "./PickPhoto/Container";

const initPickPhoto = (): ImagePicker.ImagePickerResult => {
  return {
    cancelled: false,
    uri: "https://i.imgur.com/TkIrScD.png",
    width: 0,
    height: 0,
  };
};

const Container = (): React.ReactElement => {
  const [selectedImage, setSelectedImage] = React.useState<
    ImagePicker.ImagePickerResult
  >(initPickPhoto());
  const setPickResult = (pickResult: ImagePicker.ImagePickerResult): void => {
    setSelectedImage(pickResult);
  };
  return (
    <View style={styles.container}>
      <Logo pickPhoto={selectedImage} />
      <Introduction />
      <PickPhoto setPickResult={setPickResult} />
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
