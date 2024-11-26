import { NavigationProp } from "@react-navigation/core";

export type IntroStackParamList = {
  Load: undefined;
  Start: undefined;
  Departments: undefined;
  Login: undefined;
  Conditions: undefined;
  Notification: undefined;
};

export type PropsNavigation<T extends object> = {
  navigation: NavigationProp<T>;
};

export type LoggedStackParamList = {
  Notification: undefined;
};
