import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import WishlistItem from "../components/WishlistItem";
import { COURSES } from "../constants/courses";

export default function Wishlist() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <View className="flex-row items-center justify-between px-5">
        <TouchableOpacity className="p-2">
          <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-xl font-bold">Wishlist</Text>
        <TouchableOpacity className="relative p-2">
          <MaterialCommunityIcons name="cart-outline" size={24} color="black" />
          <View className="absolute top-0 right-0 bg-red-500 w-4 h-4 rounded-full items-center justify-center">
            <Text className="text-white text-xs font-bold">5</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="pt-2">
          {COURSES.map((course, index) => (
            <WishlistItem
              key={index}
              title={course.title}
              price={course.price}
              rating={course.rating}
              reviews={course.reviews}
              image={course.image}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
