import NotificationStack from "@/app/screen/logged/stackNotification/NotificationStack";
import { NavigationIndependentTree } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

const Stack = createStackNavigator();

const LoggedStack = () => {
  return (
    <NavigationIndependentTree>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="NotificationStack" component={NotificationStack} />
      </Stack.Navigator>
    </NavigationIndependentTree>
  );
};

export default LoggedStack;
