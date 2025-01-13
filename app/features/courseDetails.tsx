import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";

type CourseDetailsParams = {
  CourseDetails: {
    course: {
      title: string;
      price: number;
      category: string;
      rating: number;
      reviews: number;
      image: any;
    };
  };
};

export default function CourseDetails() {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<CourseDetailsParams, "CourseDetails">>();
  const course = route.params.course;

  return (
    <View className="flex-1 bg-white">
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <View className="flex-row items-center justify-between px-5 pt-12 mt-5">
        <TouchableOpacity className="p-2" onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity className="p-2">
          <MaterialCommunityIcons
            name="share-variant"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="p-5">
          <Image
            source={course?.image}
            className="w-full h-48 rounded-2xl"
            resizeMode="cover"
          />

          <View className="mt-4">
            <View className="bg-[#E8F1E9] self-start px-3 py-1 rounded-full">
              <Text className="text-[#0B3D11FF]">{course?.category}</Text>
            </View>
            <Text className="text-2xl font-bold mt-2">{course?.title}</Text>

            <View className="flex-row items-center mt-2">
              <MaterialCommunityIcons name="star" size={20} color="#FFD700" />
              <Text className="ml-1">{course?.rating}</Text>
              <Text className="ml-1 text-gray-500">
                ({course?.reviews} reviews)
              </Text>
            </View>

            <Text className="text-2xl font-bold mt-4">${course?.price}</Text>
          </View>

          <View className="mt-6">
            <Text className="text-lg font-bold mb-2">About this course</Text>
            <Text className="text-gray-600 leading-6">
              Hi there! 👋 My name is Charolette Hanlin and welcome to this
              course. Digital products are more abstract and complex than any
              product we've designed before. People are using their digital
              devices faster, with less conscious thought than ever before.
            </Text>
          </View>

          <View className="mt-6">
            <Text className="text-lg font-bold mb-2">Key points</Text>
            <View className="space-y-2">
              <View className="flex-row items-center">
                <MaterialCommunityIcons
                  name="check-circle"
                  size={20}
                  color="#0B3D11FF"
                />
                <Text className="ml-2">Complete beginner to expert</Text>
              </View>
              <View className="flex-row items-center">
                <MaterialCommunityIcons
                  name="check-circle"
                  size={20}
                  color="#0B3D11FF"
                />
                <Text className="ml-2">Lifetime access</Text>
              </View>
              <View className="flex-row items-center">
                <MaterialCommunityIcons
                  name="check-circle"
                  size={20}
                  color="#0B3D11FF"
                />
                <Text className="ml-2">Access on mobile and desktop</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View className="p-5 border-t border-gray-200">
        <TouchableOpacity className="bg-[#0B3D11FF] py-4 rounded-xl">
          <Text className="text-white text-center font-bold text-lg">
            Buy Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
