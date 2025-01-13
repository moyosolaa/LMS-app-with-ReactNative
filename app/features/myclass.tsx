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
import WatchingTimeChart from "../components/WatchingTimeChart";
import CourseProgressCard from "../components/CourseProgressCard";

const watchingTimeData = [
  { day: "Sun", minutes: 45 },
  { day: "Mon", minutes: 60 },
  { day: "Tue", minutes: 30 },
  { day: "Wed", minutes: 75 },
  { day: "Thu", minutes: 90 },
  { day: "Fri", minutes: 45 },
  { day: "Sat", minutes: 15 },
];

const activeCourses = [
  {
    title: "Fundamentals of HTML & CSS From Scratch",
    image: require("../../assets/images/image.png"),
    completedLessons: 23,
    totalLessons: 33,
  },
  {
    title: "Chief Financial Officer Leadership Program",
    image: require("../../assets/images/image.png"),
    completedLessons: 10,
    totalLessons: 25,
  },
];

export default function MyClass() {
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
        <Text className="text-xl font-bold">My Class</Text>
        <TouchableOpacity className="p-2">
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-5">
          <WatchingTimeChart data={watchingTimeData} />

          <View className="mt-8">
            <Text className="text-xl font-bold mb-4">Active Progress</Text>
            {activeCourses.map((course, index) => (
              <CourseProgressCard
                key={index}
                title={course.title}
                image={course.image}
                completedLessons={course.completedLessons}
                totalLessons={course.totalLessons}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
