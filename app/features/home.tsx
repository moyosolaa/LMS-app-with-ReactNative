import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import CourseCard from "../components/CourseCard";
import { COURSES } from "../constants/courses";
import Categories from "../components/CategoryButtons";

export default function HomeScreen() {
  return (
    <ScrollView>
      <View className="bg-[#0B3D11FF] pt-12">
        <View className="flex-row justify-between mx-5 mt-5 mb-5">
          <View className="">
            <Text className="text-white mb-1 font-light text-sm">
              Good Morning 🌨️
            </Text>
            <Text className="text-white font-bold text-xl">Adeniyi Azeez</Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="notifications" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View className="px-5 pb-5">
          <View className="flex-row items-center bg-[#36693b] rounded-2xl px-4 h-14">
            <MaterialCommunityIcons
              name="magnify"
              size={22}
              color="#FFFFFFFF"
            />
            <TextInput
              placeholder="What do you want to learn?"
              className="flex-1 ml-2 text-white"
              placeholderTextColor="#F2F2F2FF"
            />
          </View>
        </View>
      </View>
      <View className="">
        <View className="flex-row justify-between m-5">
          <Text className="font-semibold text-lg">Explore topics</Text>
          <Text className="font-semibold text-sm text-[#36693b]">See more</Text>
        </View>
        <View className="flex-row mx-8 justify-between mb-5">
          <Categories category="Banking" />
          <Categories category="Design" />
          <Categories category="Finance" />
          <Categories category="Marketing" />
        </View>
        <View className="flex-row justify-between m-5">
          <Text className="font-semibold text-lg">Recommended for you</Text>
          <Text className="font-semibold text-sm text-[#36693b]">See more</Text>
        </View>
        <FlatList
          data={COURSES.slice(0, 6)}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <CourseCard
              title={item.title}
              price={item.price}
              category={item.category}
              rating={item.rating}
              reviews={item.reviews}
              image={item.image}
            />
          )}
        />
        <View className="flex-row justify-between m-5">
          <Text className="font-semibold text-lg">Popular courses</Text>
          <Text className="font-semibold text-sm text-[#36693b]">See more</Text>
        </View>
        <FlatList
          data={COURSES.slice(7)}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <CourseCard
              title={item.title}
              price={item.price}
              category={item.category}
              rating={item.rating}
              reviews={item.reviews}
              image={item.image}
            />
          )}
        />
      </View>
    </ScrollView>
  );
}
