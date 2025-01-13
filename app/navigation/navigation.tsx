import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabBar } from "../components/TabBar";
import Onboarding from "../features/onboarding";
import HomeScreen from "../features/home";
import Explore from "../features/explore";
import Wishlist from "../features/wishlist";
import Profile from "../features/profile";
import MyClass from "../features/myclass";
import CourseDetails from "../features/courseDetails";

export type RootStackParamList = {
  Onboarding: undefined;
  Main: { screen: keyof TabParamList };
  CourseDetails: { propertyId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="CourseDetails" component={CourseDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator<TabParamList>();

export type TabParamList = {
  Home: undefined;
  Explore: undefined;
  MyClass: undefined;
  Wishlist: undefined;
  Profile: undefined;
};

export function TabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="MyClass" component={MyClass} />
      <Tab.Screen name="Wishlist" component={Wishlist} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
