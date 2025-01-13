import { View, Image, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface CourseCardProps {
  image: any;
  title: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
}

type CourseDetailsProps = {
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

type NavigationProp = NativeStackNavigationProp<
  CourseDetailsProps,
  "CourseDetails"
>;

const CourseCard: React.FC<CourseCardProps> = ({
  image,
  title,
  category,
  price,
  rating,
  reviews,
}) => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <TouchableOpacity
      className="mx-0 mb-4"
      onPress={() =>
        navigation.navigate("CourseDetails", {
          course: { title, price, category, rating, reviews, image },
        })
      }
    >
      <View className="bg-white rounded-lg p-3 w-72 mr-5">
        {/* <View className="h-[250] justify-between"> */}
        <View>
          <Image
            style={{ width: "100%", height: 150 }}
            className="rounded-lg"
            source={image}
            resizeMode="cover"
          />
          <Text className="absolute top-5 left-5 bg-blue-700 p-2 rounded-xl text-sm text-white font-semibold">
            {category}
          </Text>
          <Text
            className="text-wrap font-bold text-lg leading-7 mt-3"
            numberOfLines={2}
          >
            {title}
          </Text>
        </View>
        <View className="flex-row justify-between mt-2">
          <Text className="text-wrap font-semibold">${price.toFixed(2)}</Text>
          <View className="flex-row items-center">
            <MaterialCommunityIcons name="star" size={18} color="orange" />
            <Text className="text-wrap font-normal text-sm text-gray-400 ml-1">
              {rating} ({reviews})
            </Text>
          </View>
        </View>
        {/* </View> */}
      </View>
    </TouchableOpacity>
  );
};

export default CourseCard;
