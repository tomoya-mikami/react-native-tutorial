import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";

const openImagePickerAsync = async (
  setPickResult: (pickResult: ImagePicker.ImagePickerResult) => void
) => {
  const permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

  if (permissionResult.granted === false) {
    alert("Permission to access camera roll is required!");
    return;
  }

  const pickerResult = await ImagePicker.launchImageLibraryAsync();
  if (pickerResult.cancelled === true) {
    return;
  }

  setPickResult(pickerResult);
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
});

interface ContainerProps {
  setPickResult: (pickResult: ImagePicker.ImagePickerResult) => void;
}

const Container = (props: ContainerProps): React.ReactElement => {
  const onPress = (): void => {
    openImagePickerAsync(props.setPickResult);
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>Pick a photo</Text>
    </TouchableOpacity>
  );
};

export default Container;
