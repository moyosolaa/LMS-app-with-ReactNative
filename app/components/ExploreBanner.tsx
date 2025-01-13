import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";

export default function ExploreBanner() {
  return (
    <ImageBackground
      source={require("../../assets/images/image.png")}
      className="h-48 rounded-2xl mx-5 overflow-hidden bg-[#0B3D11FF]"
    >
      <View className="flex-1 p-6 justify-center">
        <Text className="text-white text-2xl font-bold mb-2">
          Explore Our Best{"\n"}Learning Paths
        </Text>
        <TouchableOpacity className="bg-[#4CAF50] py-2 px-6 rounded-full self-start">
          <Text className="text-white font-semibold">View All</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
