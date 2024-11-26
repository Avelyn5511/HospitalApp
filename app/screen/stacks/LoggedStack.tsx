import Conditions from "@/app/screen/introduction/Conditions";
import Departments from "@/app/screen/introduction/Departments";
import Load from "@/app/screen/introduction/Load";
import Start from "@/app/screen/introduction/Start";
import Login from "@/app/screen/login/Login";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

const Stack = createStackNavigator();

const LoggedStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Load" component={Load} />
      <Stack.Screen name="Departments" component={Departments} />
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Conditions" component={Conditions} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default LoggedStack;
