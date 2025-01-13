import React from "react";
import { TouchableOpacity, View, Text, Pressable } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface categoryProps {
  category: string;
}

export default function Categories(categoryProps: categoryProps) {
  const getIconName = (category: string) => {
    switch (category.toLowerCase()) {
      case 'banking':
        return 'bank';
      case 'design':
        return 'palette';
      case 'finance':
        return 'chart-line';
      case 'marketing':
        return 'bullhorn';
      default:
        return 'book-open-variant';
    }
  };

  return (
    <TouchableOpacity>
      <View className="items-center">
        <View className="rounded-full border border-gray-300 mb-3 items-center p-4">
          <MaterialCommunityIcons
            name={getIconName(categoryProps.category)}
            size={22}
            color="#36693b"
          />
        </View>
        <Text className="text-gray-600 font-medium">
          {categoryProps.category}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
