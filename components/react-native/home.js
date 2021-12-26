import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';

export const Home = ({ navigation, route }) => {
    const [datas, SetDatas] = useState("Vide");

    useEffect(() => {

    });

    const getDatasFromGoogle = () => {
        fetch("https://api.github.com/users")
            .then(async res => {
                SetDatas(res.text());
                const resultat = await res.json();
                console.log(resultat)
                return (
                    <Text>{datas}</Text>
                );
            }).catch(err => {
                SetDatas(err.toString());
                return (
                    <Text>{datas}</Text>
                );
            });
    }

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
                {getDatasFromGoogle()}
            </View>
        </View>
    );
}

