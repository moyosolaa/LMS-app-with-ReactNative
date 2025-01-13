import React from "react";
import { View, Text } from "react-native";

interface DayBarProps {
  day: string;
  minutes: number;
  isActive: boolean;
  maxMinutes: number;
}

const DayBar = ({ day, minutes, isActive, maxMinutes }: DayBarProps) => {
  const height = (minutes / maxMinutes) * 200; // Max height of 200
  return (
    <View className="items-center">
      <Text className="mb-2">{minutes > 0 ? `${minutes} min` : ""}</Text>
      <View className="w-12 items-center">
        <View
          style={{ height }}
          className={`w-8 rounded-lg ${
            isActive ? "bg-[#0B3D11FF]" : "bg-gray-100"
          }`}
        />
      </View>
      <Text className="mt-2 text-gray-600">{day}</Text>
    </View>
  );
};

interface WatchingTimeChartProps {
  data: {
    day: string;
    minutes: number;
  }[];
}

export default function WatchingTimeChart({ data }: WatchingTimeChartProps) {
  const maxMinutes = Math.max(...data.map((d) => d.minutes));

  return (
    <View className="mt-6">
      <View className="flex-row justify-between items-end mb-4">
        <Text className="text-xl font-bold">Your Watching Time</Text>
        <View className="flex-row items-center border border-gray-200 rounded-lg px-3 py-1">
          <Text className="text-gray-600">Last 7 days</Text>
          <Text className="ml-2">▼</Text>
        </View>
      </View>
      <View className="relative">
        <View className="absolute w-full h-[1] border-t border-dashed border-green-500 top-1/2" />
        <View className="flex-row justify-between py-4">
          {data.map((item, index) => (
            <DayBar
              key={index}
              day={item.day}
              minutes={item.minutes}
              isActive={item.minutes === maxMinutes}
              maxMinutes={maxMinutes}
            />
          ))}
        </View>
      </View>
    </View>
  );
}
