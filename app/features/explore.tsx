import React from "react";
import {
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ExploreBanner from "../components/ExploreBanner";
import SectionHeader from "../components/SectionHeader";
import TopicButton from "../components/TopicButton";
import CourseCard from "../components/CourseCard";
import { COURSES } from "../constants/courses";

const topics = [
  { title: "Design", icon: "palette", color: "#4CAF50", bgColor: "#FFFFFFFF" },
  {
    title: "Business",
    icon: "briefcase",
    color: "#7E57C2",
    bgColor: "#FFFFFFFF",
  },
  {
    title: "Finance",
    icon: "chart-line",
    color: "#42A5F5",
    bgColor: "#FFFFFFFF",
  },
  {
    title: "Marketing",
    icon: "bullhorn",
    color: "#FFA726",
    bgColor: "#FFFFFFFF",
  },
];

export default function Explore() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <ScrollView>
        <View>
          {/* Search Header */}
          <View className="flex-row items-center mx-5 mb-5">
            <View className="flex-1 flex-row items-center bg-gray-100 rounded-full px-4 h-12 mr-4">
              <MaterialCommunityIcons name="magnify" size={24} color="#666" />
              <TextInput
                placeholder="Search for anything"
                className="flex-1 ml-2"
                placeholderTextColor="#666"
              />
            </View>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="cart-outline"
                size={24}
                color="#000"
              />
            </TouchableOpacity>
          </View>

          {/* Banner */}
          <ExploreBanner />

          {/* Topics Section */}
          <View className="mt-6">
            <SectionHeader title="Topics" />
            <View className="flex-row flex-wrap mx-3 mb-5">
              {topics.slice(0, 2).map((topic, index) => (
                <TopicButton key={index} {...topic} />
              ))}
            </View>
            <View className="flex-row flex-wrap mx-3">
              {topics.slice(2, 4).map((topic, index) => (
                <TopicButton key={index} {...topic} />
              ))}
            </View>
          </View>

          {/* Recently Added Section */}
          <View className="mt-6">
            <SectionHeader title="Recently added" />
            <FlatList
              data={COURSES.slice(0, 4)}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 20 }}
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
