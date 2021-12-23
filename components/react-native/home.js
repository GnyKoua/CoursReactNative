import * as React from 'react';
import { View, Text, Button } from 'react-native';

export const Home = ({ navigation, route }) => {
    return (
        <View>
            <Text>Home page</Text>
            <View style={{
                paddingTop: 10
            }}>
                <Button title="Go to screen 1"
                    onPress={
                        () => navigation.navigate("Screen1", {
                            nom: "Mozart"
                        })
                    } />
            </View>
            <View style={{
                paddingTop: 10
            }}>
                <Button title="Go to Image zoom"
                    onPress={
                        () => navigation.navigate("Animation")
                    } />
            </View>
            <View style={{
                paddingTop: 10
            }}>
                <Button title="Go to Application 11"
                    onPress={
                        () => navigation.navigate("Application11")
                    } />
            </View>
        </View>
    );
}

