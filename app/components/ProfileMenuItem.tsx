import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface ProfileMenuItemProps {
  icon: string;
  title: string;
  hasToggle?: boolean;
  isToggled?: boolean;
  onPress?: () => void;
}

export default function ProfileMenuItem({
  icon,
  title,
  hasToggle = false,
  isToggled = false,
  onPress,
}: ProfileMenuItemProps) {
  return (
    <TouchableOpacity
      className="flex-row items-center justify-between p-4 border-b border-gray-100"
      onPress={onPress}
    >
      <View className="flex-row items-center">
        <MaterialCommunityIcons
          name={icon}
          size={24}
          color="#666"
          style={{ width: 32 }}
        />
        <Text className="text-base font-medium ml-3">{title}</Text>
      </View>
      {hasToggle ? (
        <View className={`w-12 h-6 rounded-full ${isToggled ? 'bg-[#0B3D11FF]' : 'bg-gray-200'} justify-center px-1`}>
          <View className={`w-5 h-5 rounded-full bg-white ${isToggled ? 'ml-5' : 'ml-0'}`} />
        </View>
      ) : (
        <MaterialCommunityIcons name="chevron-right" size={24} color="#666" />
      )}
    </TouchableOpacity>
  );
}
