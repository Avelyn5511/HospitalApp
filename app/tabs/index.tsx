import Favorite from "@/app/screen/logged/Favorite";
import HomeStack from "@/app/screen/logged/home/stackHome/HomeStack";
import Message from "@/app/screen/logged/Message";
import Profile from "@/app/screen/logged/Profile";
import iconHome from "@/assets/images/tabs/home.png";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image, ImageSourcePropType, View } from "react-native";

const Tab = createBottomTabNavigator();

type TabIconProps = {
  icon: ImageSourcePropType;
  color: string;
  name: string;
  focused: boolean;
};

// @ts-ignore
const TabIcon = ({ icon, color, name, focused }: TabIconProps) => {
  return (
    <View>
      <Image
        source={icon}
        resizeMode={"contain"}
        tintColor={color}
        className="w-6 h-6"
      />
    </View>
  );
};

const LoggedTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,

          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={iconHome}
              name="home"
              focused={focused}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          title: "Favorite",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={iconHome}
              name="Favorite"
              focused={focused}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          title: "Message",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={iconHome}
              name="Message"
              focused={focused}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={iconHome}
              name="Profile"
              focused={focused}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default LoggedTabs;
