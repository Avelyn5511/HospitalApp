import Favorite from "@/app/screen/logged/Favorite";
import HomeStack from "@/app/screen/logged/home/stackHome/HomeStack";
import Message from "@/app/screen/logged/Message";
import Profile from "@/app/screen/logged/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationIndependentTree } from "@react-navigation/native";
import React from "react";
import { Image, ImageSourcePropType, View } from "react-native";

const Tab = createBottomTabNavigator();

type TabIconProps = {
  icon: ImageSourcePropType;
  color: string;
  focused: boolean;
};

// @ts-ignore
const TabIcon = ({ icon, color }: TabIconProps) => {
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
    <NavigationIndependentTree>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            headerShown: false,

            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={require("@/assets/images/tabs/home.png")}
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
                icon={require("@/assets/images/tabs/favorite.png")}
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
                icon={require("@/assets/images/tabs/message.png")}
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
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={require("@/assets/images/tabs/profile.png")}
                focused={focused}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationIndependentTree>
  );
};

export default LoggedTabs;
