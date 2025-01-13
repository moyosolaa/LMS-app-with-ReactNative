import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface TopicButtonProps {
  title: string;
  icon: string;
  color: string;
  bgColor: string;
}

export default function TopicButton({
  title,
  icon,
  color,
  bgColor,
}: TopicButtonProps) {
  return (
    <TouchableOpacity className="flex-1 mx-2">
      <View
        className="flex-row items-center p-4 rounded-2xl border border-gray-100 elevation-2xl"
        style={{ backgroundColor: bgColor }}
      >
        <View
          className="w-10 h-10 rounded-full items-center justify-center mr-3"
          style={{ backgroundColor: color }}
        >
          <MaterialCommunityIcons name={icon} size={24} color="white" />
        </View>
        <Text className="font-semibold text-base flex-1">{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
