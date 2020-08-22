import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import Flip from "./Flip/Container";

const style = StyleSheet.create({
  camera: {
    flex: 1,
  },
  view: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: "white",
  },
});

const Container = (): React.ReactElement => {
  const [hasPermission, setHasPermission] = React.useState<null | boolean>(
    null
  );
  const [type, setType] = React.useState(Camera.Constants.Type.back);
  const cameraRef = React.useRef<Camera>(null);

  const snap = async () => {
    if (cameraRef && cameraRef.current) {
      const { uri } = await cameraRef.current.takePictureAsync(); // uriはローカルイメージURIで一時的にローカルに保存される
      const response = await fetch(uri);
      const blob = await response.blob();
    }
  };

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={style.view}>
      <Camera style={style.camera} type={type} ref={cameraRef}>
        <Flip type={type} setType={setType} />
        <TouchableOpacity
          style={{
            flex: 1,
            alignSelf: "flex-end",
            alignItems: "center",
          }}
          onPress={() => {
            snap();
          }}
        >
          <Text style={style.text}> Snap </Text>
        </TouchableOpacity>
      </Camera>
    </View>
  );
};

export default Container;
