import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <View className="flex-row justify-between mx-5 mb-4">
      <Text className="text-xl font-semibold">{title}</Text>
      <TouchableOpacity>
        <Text className="text-[#4CAF50] font-semibold">See more</Text>
      </TouchableOpacity>
    </View>
  );
}
