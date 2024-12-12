import App from "@/app/App";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";

import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function Index() {
  return (
    <Provider store={store}>
      <NavigationIndependentTree>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </NavigationIndependentTree>
    </Provider>
  );
}
