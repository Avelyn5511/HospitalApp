import Notification from "@/app/screen/logged/Notification";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

const Stack = createStackNavigator();

const LoggedStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Notification" component={Notification} />
    </Stack.Navigator>
  );
};

export default LoggedStack;
