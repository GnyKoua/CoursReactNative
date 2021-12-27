import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ImageZoom } from "../components/react-native/animation";
import application11 from "../components/react-native/application11";
import { Home } from "../components/react-native/home";
import { Requetes } from "../components/react-native/requests";
import { Screen1 } from "../components/react-native/screen1";
import { Screen2 } from "../components/react-native/screen2";

const Stack = createNativeStackNavigator();

export const MyNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Screen1" component={Screen1} />
            <Stack.Screen name="Screen2" component={Screen2} />
            <Stack.Screen name="Animation" component={ImageZoom} />
            <Stack.Screen name="Application11" component={application11} />
            <Stack.Screen name="Requetes" component={Requetes} />
        </Stack.Navigator>
    );
}

