import React from "react";
import { Text, View } from "react-native";
import { Style } from "./style";

type Props = {
  annotationLabelText: string;
  disable: boolean;
};

const AnnotationLabel = (props: Props): React.ReactElement => {
  const { annotationLabelText, disable } = props;
  if (disable) {
    return <View />;
  }
  return (
    <View style={Style.annotationLabel}>
      <Text style={Style.annotationLabelText}>{annotationLabelText}</Text>
    </View>
  );
};

export default AnnotationLabel;
