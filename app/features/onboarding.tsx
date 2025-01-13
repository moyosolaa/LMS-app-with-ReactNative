import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { RootStackParamList } from "../navigation/navigation";

export default function Onboarding() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View className="mt-20">
      <Text>Onboarding</Text>
      <Button
        title="To Home"
        onPress={() => {
          navigation.navigate("Main", { screen: "Home" });
        }}
      />
    </View>
  );
}
