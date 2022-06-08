import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { DetailProfil, Follow, Follower } from "../pages";
import { Color } from "../utils/general";
import BottomTab from "./BottomTab";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Dashboard"
        component={BottomTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Pengikut"
        component={Follower}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Color.green,
          },
          headerTitleStyle: { color: Color.white },
        }}
      />
      <Stack.Screen
        name="Mengikuti"
        component={Follow}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Color.green,
          },
          headerTitleStyle: { color: Color.white },
        }}
      />
      <Stack.Screen
        name="DetailProfil"
        component={DetailProfil}
        options={{
          headerTitle: "",
          headerStyle: {
            backgroundColor: '#f4f4f4',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
