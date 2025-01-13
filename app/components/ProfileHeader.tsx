import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface ProfileHeaderProps {
  name: string;
  email: string;
  image: any;
}

export default function ProfileHeader({ name, email, image }: ProfileHeaderProps) {
  return (
    <View className="bg-[#0B3D11FF] rounded-2xl mx-5 mb-6 p-4 flex-row items-center">
      <Image
        source={image}
        className="w-16 h-16 rounded-full"
        resizeMode="cover"
      />
      <View className="flex-1 ml-4">
        <Text className="text-white text-xl font-semibold">{name}</Text>
        <Text className="text-gray-300">{email}</Text>
      </View>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="square-edit-outline"
          size={24}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
}
