import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ProfileHeader from "../components/ProfileHeader";
import ProfileMenuItem from "../components/ProfileMenuItem";

export default function Profile() {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
        <Text className="text-xl font-bold">Profile</Text>
        <View className="w-10" /> {/* Empty view for balanced spacing */}
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="pt-4">
          <ProfileHeader
            name="Adeniyi Azeez"
            email="adeniyiazeez@gmail.com"
            image={require("../../assets/images/image.png")}
          />

          {/* Account Settings */}
          <View className="bg-white rounded-2xl mx-5 mb-6">
            <ProfileMenuItem
              icon="account-outline"
              title="Personal Details"
            />
            <ProfileMenuItem
              icon="video-outline"
              title="Preference Video"
            />
            <ProfileMenuItem
              icon="download-outline"
              title="Your Download"
            />
            {/* <ProfileMenuItem
              icon="moon-waning-crescent"
              title="Dark Mode"
              hasToggle
              isToggled={isDarkMode}
              onPress={() => setIsDarkMode(!isDarkMode)}
            /> */}
          </View>

          {/* Other Settings */}
          <View className="bg-white rounded-2xl mx-5 mb-6">
            <ProfileMenuItem
              icon="gift-outline"
              title="Referral Code"
            />
            <ProfileMenuItem
              icon="bell-outline"
              title="Learning Reminder"
            />
            <ProfileMenuItem
              icon="ticket-percent-outline"
              title="Voucher Code"
            />
          </View>

          {/* More */}
          <View className="bg-white rounded-2xl mx-5 mb-6">
            <ProfileMenuItem
              icon="school-outline"
              title="Invester Academy"
            />
            <ProfileMenuItem
              icon="help-circle-outline"
              title="FAQs"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
