import LoggedStack from "@/app/screen/stacks/LoggedStack";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";

export default function Index() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <LoggedStack />
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
