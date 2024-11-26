import App from "@/app/App";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";

export default function Index() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
