import * as React from 'react';
import { View, Text } from 'react-native';

export const Screen1 = ({ navigation, route }) => {
    return (
        <View>
            <Text>Screen1</Text>
            <Text>Nom : {route.params.nom}</Text>
        </View>
    );
}

