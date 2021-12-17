import * as React from 'react';
import { View, Text, Button } from 'react-native';

export const Home = ({ navigation, route }) => {
    return (
        <View>
            <Text>Home page</Text>
            <Button title="Go to screen 1"
                onPress={
                    () => navigation.navigate("Screen1", {
                        nom: "Mozart"
                    })
                } />
        </View>
    );
}

