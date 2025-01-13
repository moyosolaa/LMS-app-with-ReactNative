import { View, Text, TouchableOpacity } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { TabParamList } from "../navigation/navigation";
import { SafeAreaView } from "react-native-safe-area-context";

type IconName = keyof typeof MaterialCommunityIcons.glyphMap;

const TAB_ICONS: Record<
  keyof TabParamList,
  { active: IconName; inactive: IconName }
> = {
  Home: {
    active: "home",
    inactive: "home-outline",
  },
  Explore: {
    active: "magnify",
    inactive: "magnify",
  },
  Profile: {
    active: "account",
    inactive: "account-outline",
  },
  MyClass: {
    active: "school",
    inactive: "school-outline",
  },
  Wishlist: {
    active: "heart",
    inactive: "heart-outline",
  },
};

export function TabBar({ state, navigation }: BottomTabBarProps) {
  return (
      <View className="flex-row items-center justify-around px-5 py-3 pb-6 bg-white border-t border-gray-100 ">
        {state.routes.map((route, index) => {
          const isActive = state.index === index;
          const { active, inactive } =
            TAB_ICONS[route.name as keyof TabParamList];

          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => navigation.navigate(route.name)}
              className="items-center"
            >
              <MaterialCommunityIcons
                name={isActive ? active : inactive}
                size={22}
                color={isActive ? "#0B3D11FF" : "#9CA3AF"}
              />
              <Text
                className={`text-sm mt-1 ${
                  isActive
                    ? "text-[#0B3D11FF] font-medium"
                    : "text-gray-500 font-medium"
                }`}
              >
                {route.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
  );
}
