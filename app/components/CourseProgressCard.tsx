import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

interface CourseProgressProps {
  title: string;
  image: any;
  completedLessons: number;
  totalLessons: number;
  onPress?: () => void;
}

export default function CourseProgressCard({
  title,
  image,
  completedLessons,
  totalLessons,
  onPress,
}: CourseProgressProps) {
  const progress = ((completedLessons / totalLessons) * 100).toFixed(1);

  return (
    <TouchableOpacity
      className="bg-white rounded-2xl p-4 mb-4 border border-gray-100"
      onPress={onPress}
    >
      <View className="flex-row items-center mb-4">
        <Image
          source={image}
          className="w-16 h-16 rounded-xl"
          resizeMode="cover"
        />
        <Text className="flex-1 ml-4 font-semibold text-lg" numberOfLines={2}>
          {title}
        </Text>
      </View>
      <View className="flex-row justify-between mb-2">
        <Text className="text-gray-500">
          {completedLessons} of {totalLessons} lessons
        </Text>
        <Text className="text-gray-500">{progress}% completed</Text>
      </View>
      <View className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <View
          className="h-full bg-[#4CAF50] rounded-full"
          style={{ width: `${progress}%` }}
        />
      </View>
    </TouchableOpacity>
  );
}
