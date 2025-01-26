import Notifications from "@/app/screen/logged/Favorite";
import Appointment from "@/app/screen/logged/home/screenHome/Appointment/Appointment";
import HomeStack from "@/app/screen/logged/home/stackHome/HomeStack";
import Message from "@/app/screen/logged/Message";
import Profile from "@/app/screen/logged/Profile";
import { TabBarLabel } from "@/app/tabs/LabelBar";
import { HomeTabStacks } from "@/app/types/types";
import { Ionicons } from "@expo/vector-icons";
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { useNavigation } from "expo-router";
import { Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

const Tab = createBottomTabNavigator();

const IconHome = () => (
  <Svg width="35" height="35" viewBox="0 0 40 35" fill="none">
    <Path
      d="M5 13.125L20 2.91667L35 13.125V29.1667C35 29.9402 34.6488 30.6821 34.0237 31.2291C33.3986 31.776 32.5507 32.0833 31.6667 32.0833H8.33333C7.44928 32.0833 6.60143 31.776 5.97631 31.2291C5.35119 30.6821 5 29.9402 5 29.1667V13.125Z"
      stroke="black"
      strokeWidth="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M15 32.0833V17.5H25V32.0833"
      stroke="black"
      strokeWidth="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

const IconNotification = () => (
  <Svg width="35" height="35" viewBox="0 0 35 35" fill="none">
    <Path
      d="M13.6112 29.2992C14.6432 30.1237 16.006 30.625 17.5 30.625C18.9941 30.625 20.3569 30.1237 21.3889 29.2992M6.57367 25.0568C5.95882 25.0568 5.61541 24.0909 5.98734 23.5542C6.85036 22.3089 7.68335 20.4825 7.68335 18.2831L7.71894 15.0962C7.71894 9.17503 12.0981 4.375 17.5 4.375C22.9816 4.375 27.4252 9.24574 27.4252 15.2541L27.3896 18.2831C27.3896 20.4976 28.1939 22.334 29.0218 23.5798C29.3793 24.1178 29.0351 25.0568 28.4278 25.0568H6.57367Z"
      stroke="black"
      strokeWidth="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

const IconProfile = () => (
  <Svg width="30" height="30" viewBox="0 0 26 27" fill="none">
    <Path
      d="M12.625 0.967117C14.288 0.967117 15.8829 1.62776 17.0589 2.8037C18.2348 3.97965 18.8955 5.57457 18.8955 7.23761C18.8955 8.90065 18.2348 10.4956 17.0589 11.6715C15.8829 12.8475 14.288 13.5081 12.625 13.5081C10.9619 13.5081 9.36701 12.8475 8.19106 11.6715C7.01511 10.4956 6.35448 8.90065 6.35448 7.23761C6.35448 5.57457 7.01511 3.97965 8.19106 2.8037C9.36701 1.62776 10.9619 0.967117 12.625 0.967117ZM12.625 4.10236C11.7934 4.10236 10.996 4.43268 10.408 5.02066C9.82004 5.60863 9.48972 6.40609 9.48972 7.23761C9.48972 8.06913 9.82004 8.86659 10.408 9.45456C10.996 10.0425 11.7934 10.3729 12.625 10.3729C13.4565 10.3729 14.2539 10.0425 14.8419 9.45456C15.4299 8.86659 15.7602 8.06913 15.7602 7.23761C15.7602 6.40609 15.4299 5.60863 14.8419 5.02066C14.2539 4.43268 13.4565 4.10236 12.625 4.10236ZM12.625 15.0757C16.8105 15.0757 25.166 17.1607 25.166 21.3462V26.0491H0.0839844V21.3462C0.0839844 17.1607 8.43941 15.0757 12.625 15.0757ZM12.625 18.0542C7.96913 18.0542 3.06247 20.3429 3.06247 21.3462V23.0706H22.1875V21.3462C22.1875 20.3429 17.2808 18.0542 12.625 18.0542Z"
      fill="black"
      strokeWidth="2"
    />
  </Svg>
);

const IconMessage = () => (
  <Svg width="28" height="30" viewBox="0 0 30 32" fill="none">
    <Path
      d="M29 15.1667C29.0053 17.3665 28.5256 19.5365 27.6 21.5C26.5024 23.8529 24.8151 25.832 22.7271 27.2155C20.6391 28.599 18.2328 29.3323 15.7778 29.3333C13.7246 29.3391 11.6993 28.8251 9.86665 27.8333L1 31L3.95555 21.5C3.02989 19.5365 2.5502 17.3665 2.55555 15.1667C2.5565 12.5363 3.24095 9.95812 4.53222 7.72095C5.8235 5.48379 7.67061 3.67599 9.86665 2.50005C11.6993 1.50827 13.7246 0.994312 15.7778 1.00005H16.5555C19.7978 1.1917 22.8603 2.65798 25.1564 5.11814C27.4526 7.5783 28.8211 10.8595 29 14.3334V15.1667Z"
      stroke="black"
      strokeWidth="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

const LoggedTabs = () => {
  const navigation = useNavigation<BottomTabNavigationProp<HomeTabStacks>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View className="flex-1">
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 84,
            backgroundColor: "#fff",
            paddingTop: 15,
            zIndex: 1,
            flexDirection: "row",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon: () => (
              <View style={{ marginHorizontal: 10 }}>
                <IconHome />
              </View>
            ),
            tabBarLabel: ({ focused }) => (
              <TabBarLabel label="Главная" focused={focused} />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notifications}
          options={{
            tabBarIcon: () => (
              <View style={{ marginRight: -15, zIndex: 1 }}>
                <IconNotification />
              </View>
            ),
            tabBarLabel: ({ focused }) => (
              <View className="relative">
                <Text className="text-xs ml-2">Уведомления</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Add"
          component={Appointment}
          options={{
            tabBarIcon: () => (
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 32,
                  backgroundColor: "#0089FF",
                  justifyContent: "center",
                  alignItems: "center",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.3,
                  shadowRadius: 4,
                  elevation: 5,
                  position: "absolute",
                  top: -40,
                  zIndex: 2,
                }}
              >
                <Ionicons name="add-outline" size={34} color="white" />
              </View>
            ),

            tabBarLabel: () => null,
          }}
        />
        <Tab.Screen
          name="Message"
          component={Message}
          options={{
            title: "Чат",
            tabBarIcon: () => (
              <View style={{ marginHorizontal: 10 }}>
                <IconMessage />
              </View>
            ),
            tabBarLabel: ({ focused }) => (
              <TabBarLabel label="Чат" focused={focused} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            title: "Профиль",
            tabBarIcon: () => (
              <View style={{ marginHorizontal: 10 }}>
                <IconProfile />
              </View>
            ),
            tabBarLabel: ({ focused }) => (
              <TabBarLabel label="Профиль" focused={focused} />
            ),
          }}
        />
      </Tab.Navigator>
      {/* <TouchableOpacity */}
      {/*   onPress={handleAddPress} */}
      {/*   style={{ */}
      {/*     position: "absolute", */}
      {/*     bottom: 42, */}
      {/*     left: "50%", */}
      {/*     transform: [{ translateX: -31 }], */}
      {/*     backgroundColor: "#007BFF", */}
      {/*     padding: 15, */}
      {/*     borderRadius: 50, */}
      {/*     zIndex: 10, */}
      {/*   }} */}
      {/* > */}
      {/*   <Ionicons name="add-outline" size={34} color="#fff" /> */}
      {/* </TouchableOpacity> */}
    </View>
  );
};

export default LoggedTabs;
