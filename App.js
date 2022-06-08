// In App.js in a new project
import { NavigationContainer } from "@react-navigation/native";

import MyTabs from "./src/routes";

function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default App;
