import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { ImageZoom } from "../components/react-native/animation";
import { Home } from "../components/react-native/home";
import { Screen1 } from "../components/react-native/screen1";
import { Screen2 } from "../components/react-native/screen2";

const Stack = createStackNavigator();

export const MyNavigation2 = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Screen1" component={Screen1} />
            <Stack.Screen name="Screen2" component={Screen2} />
            <Stack.Screen name="Animation" component={ImageZoom} />
        </Stack.Navigator>
    );
}

