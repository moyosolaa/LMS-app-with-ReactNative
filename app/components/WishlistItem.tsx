import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface WishlistItemProps {
  title: string;
  price: number;
  rating: number;
  reviews: number;
  image: any;
}

export default function WishlistItem({
  title,
  price,
  rating,
  reviews,
  image,
}: WishlistItemProps) {
  return (
    <TouchableOpacity className="flex-row bg-white p-3 mx-5 mb-4 rounded-2xl border border-gray-100">
      <Image
        source={image}
        className="w-24 h-24 rounded-xl"
        resizeMode="cover"
      />
      <View className="flex-1 ml-4 justify-between">
        <Text className="font-semibold text-base" numberOfLines={2}>
          {title}
        </Text>
        <View className="flex-row items-center justify-between">
          <Text className="text-lg font-bold">${price.toFixed(2)}</Text>
          <View className="flex-row items-center">
            <MaterialCommunityIcons name="star" size={16} color="#FFC107" />
            <Text className="ml-1 font-semibold">{rating}</Text>
            <Text className="text-gray-500 ml-1">({reviews.toLocaleString()})</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
