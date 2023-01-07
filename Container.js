import * as React from "react";

//Import Navigation Container
import { NavigationContainer } from "@react-navigation/native";

// Import Stack Navigation
import { createStackNavigator } from "@react-navigation/stack";

//Import Bottom Tab Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Import Icon
import { Ionicons } from "@expo/vector-icons";

// Import Screen
import Login from "./pages/Login";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import OnBoard from "./pages/OnBoard";
import AddCategory from "./pages/AddCategory";
import AddList from "./pages/AddList";

// Create Stack Navigation
const Stack = createStackNavigator();

//Create Bottom Tab Navigation
const Tab = createBottomTabNavigator();

// Create Component Bottom Tab Navigation
export const MyTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="OnBoard"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name == "OnBoard") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name == "AddCategory") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name == "AddList") {
            iconName = focused ? "ios-list-circle" : "ios-list-circle-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "grey",
      })}
    >
      <Tab.Screen name="OnBoard" component={OnBoard} />
      <Tab.Screen name="AddCategory" component={AddCategory} />
      <Tab.Screen name="AddList" component={AddList} />
    </Tab.Navigator>
  );
};

export default function Container() {
  // Init Theme
  //   const theme = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerMode: "screen",
          headerShown: false,
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="BottomTab"
          component={MyTab}
          options={{
            headerShown: false,
            title: "Hello Screen",
          }}
        />
        <Stack.Screen
          name="Main"
          component={Login}
          options={{
            headerShown: false,
            title: "Login",
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterForm}
          options={{
            headerShown: false,
            title: "Register",
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginForm}
          options={{
            headerShown: false,
            title: "LoginForm",
          }}
        />
        <Stack.Screen
          name="OnBoard"
          component={OnBoard}
          options={{
            headerShown: false,
            title: "OnBoard",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
