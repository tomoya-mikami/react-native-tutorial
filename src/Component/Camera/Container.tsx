import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import EnvBox from "../../Config/Env";

const Container = (): React.ReactElement => {
  const [hasPermission, setHasPermission] = useState<null | boolean>(null);
  const [annotationLabel, setAnnotationLabel] = useState<string>("");
  const [base64Image, setBase64Image] = useState<string>("");
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
    const response = await fetch(EnvBox().API_URL + EnvBox().API_KEY, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: body,
    });
    const result = await response.json();
    const annotation =
      (result.responses[0].labelAnnotations[0].description as string) || "";

    setAnnotationLabel(annotation);
  };

  const sendCloudVisionSandbox = async () => {
    const annotation = "testLabel";
    setAnnotationLabel(annotation);
  };

  const objectDetection = async (base64Image: string) => {
    if (base64Image === "") {
      return;
    }
    if (EnvBox().ENVIRONMENT === "localhost") {
      sendCloudVisionSandbox();
    } else {
      sendCloudVision(base64Image || "");
    }
  };

  const takePicture = async () => {
    if (camera?.current) {
      const { base64 } = await camera.current.takePictureAsync({
        base64: true,
      });
      if (base64 !== undefined) {
        setBase64Image(base64);
      }
    }
  };

  useEffect(() => {
    (async () => {
      objectDetection(base64Image);
    })();
  }, [base64Image]);

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
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={Camera.Constants.Type.back}
        ref={camera}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              padding: 16,
              backgroundColor: "#fff",
              alignSelf: "flex-end",
              alignItems: "center",
            }}
            onPress={() => {
              takePicture();
            }}
          >
            <Ionicons name="ios-camera" size={48} color="#000" />
          </TouchableOpacity>
        </View>
      </Camera>
      <Text
        style={{
          fontSize: 36,
          backgroundColor: "#fff",
          color: "#000",
          textAlign: "center",
          padding: 16,
        }}
      >
        {annotationLabel}
      </Text>
    </View>
  );
};

export default Container;
