import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Feather, Ionicons } from "@expo/vector-icons";
import { Home } from "../pages";

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const BottomTab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Profil"
        component={Home}
        options={{
          headerTitle: "Profil",
          headerTitleAlign: "center",
          headerTitleStyle: { color: "white" },
          headerLeft: ({ color }) => (
            <MaterialCommunityIcons
              name="arrow-left"
              color={"white"}
              size={30}
            />
          ),
          headerLeftContainerStyle: { marginLeft: 20 },
          headerRight: ({ color }) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name="share-social-outline"
                  color={"white"}
                  size={25}
                />
                <View style={{ flex: 0.1 }} />
                <MaterialCommunityIcons
                  name="account-outline"
                  color={"white"}
                  size={30}
                />
              </View>
            );
          },
          headerRightContainerStyle: { marginRight: 20 },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerStyle: {
            backgroundColor: "#06B1A1",
          },
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" color={color} size={size} />
          ),
          headerShown: true,
        }}
        name="Search"
        component={Home}
      />

      <Tab.Screen
        name="people"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-group"
              color={color}
              size={size}
            />
          ),
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="chat"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles-sharp" color={color} size={size} />
          ),
          headerShown: true,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
