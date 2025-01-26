import React from "react";
import { Text, View } from "react-native";

interface TabBarLabelProps {
  label: string;
  focused: boolean;
}

export const TabBarLabel: React.FC<TabBarLabelProps> = ({ label, focused }) => (
  <View className="flex flex-col items-center ">
    <Text
      style={{
        color: focused ? "#0089FF" : "#000",
        fontSize: 12,
        marginTop: 5,
        fontWeight: "semibold",
        fontFamily: "inter",
      }}
    >
      {label}
    </Text>
  </View>
);
