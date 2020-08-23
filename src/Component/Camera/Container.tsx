import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import Environment from "../../../config/environments";
import { Style } from "./style";

const Container = (): React.ReactElement => {
  const [hasPermission, setHasPermission] = useState<null | boolean>(null);
  const [annotationLabel, setAnnotationLabel] = useState<string>("");
  const camera = React.useRef<Camera>(null);

  const sendCloudVision = async (image: string) => {
    const body = JSON.stringify({
      requests: [
        {
          features: [{ type: "LABEL_DETECTION", maxResults: 3 }],
          image: {
            content: image,
          },
        },
      ],
    });
    const response = await fetch(
      "https://vision.googleapis.com/v1/images:annotate?key=" +
        Environment["GOOGLE_CLOUD_VISION_API_KEY"],
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: body,
      }
    );
    const result = await response.json();
    const annotation =
      (result.responses[0].labelAnnotations[0].description as string) || "";

    setAnnotationLabel(annotation);
  };

  const sendCloudVisionSandbox = async (image: string) => {
    const annotation = "testLabel";
    setAnnotationLabel(annotation);
  };

  const takePicture = async () => {
    if (camera?.current) {
      const { base64 } = await camera.current.takePictureAsync({
        base64: true,
      });
      sendCloudVisionSandbox(base64 || "");
    }
  };

  useEffect(() => {
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
    <Camera style={Style.camera} type={Camera.Constants.Type.back} ref={camera}>
      <View style={Style.annotationLabel}>
        <Text style={Style.annotationLabelText}>{annotationLabel}</Text>
      </View>

      <View style={Style.snapButton}>
        <TouchableOpacity
          onPress={() => {
            takePicture();
          }}
        >
          <Ionicons name="ios-camera" size={48} style={Style.snapButtonText} />
        </TouchableOpacity>
      </View>
    </Camera>
  );
};

export default Container;
