import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeUser } from '../../redux/actions/users';

export const Home = ({ navigation, route }) => {

    const { users } = useSelector(state => state.usersReducer);
    const dispatch = useDispatch();
    const actions = bindActionCreators({
        removeUser
    }, dispatch);

    const renderUser = (user, index) => {
        return (
            <View style={{ padding: 15, flexDirection: "row" }}>
                <View style={[styles.row, {
                    justifyContent: "center"
                }]}>
                    <Image style={{
                        width: 80,
                        height: 80,
                        borderRadius: 50
                    }} source={{ uri: user.picture.large }} />
                </View>
                <View style={{ paddingLeft: 10 }}>
                    <Text style={styles.bold}>
                        {user.name.title} {user.name.last} {user.name.first}
                    </Text>
                    <View style={styles.row}>
                        <Icon name="cellular-outline" color='rgb(33, 150, 243)' type='ionicon' />
                        <Text>{user.phone}</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="phone" color='#00aced' />
                        <Text>{user.cell}</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="email" color='grey' />
                        <Text>{user.email}</Text>
                    </View>
                </View>
                <View style={[styles.row, { padding: 10 }]}>
                    <TouchableOpacity
                        style={{
                            width: 50,
                            height: 80,
                            backgroundColor: "red",
                            alignItems: "center",
                            justifyContent: "center",
                            display: "flex"
                        }}
                        onPress={() => actions.removeUser(index)}>
                        <Icon name="trash-outline" color='#fff' type='ionicon' />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.center}>
                    {/* <Text>Home page</Text> */}
                    <View style={[styles.center, {
                        flexDirection: "row"
                    }]}>
                        <View style={styles.padding}>
                            <Button title="Go to screen 1"
                                onPress={
                                    () => navigation.navigate("Screen1", {
                                        nom: "Mozart"
                                    })
                                } />
                        </View>
                        <View style={styles.padding}>
                            <Button title="Go to Image zoom"
                                onPress={
                                    () => navigation.navigate("Animation")
                                } />
                        </View>
                        <View style={styles.padding}>
                            <Button title="Go to Application 11"
                                onPress={
                                    () => navigation.navigate("Application11")
                                } />
                        </View>
                        <View style={styles.padding}>
                            <Button title="Go to Requests HTTP"
                                onPress={
                                    () => navigation.navigate("Requetes")
                                } />
                        </View>
                    </View>
                </View>
                <View style={{ paddingLeft: 20, paddingTop: 20 }}>
                    <Text style={[styles.bold, { fontSize: 30 }]}>
                        Liste des fakes users :
                    </Text>
                    <FlatList
                        data={users}
                        keyExtractor={item => item.login.uuid}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => renderUser(item, index)} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    padding: {
        padding: 10
    },
    center: {
        justifyContent: "center",
        alignItems: "center"
    },
    bold: {
        fontWeight: "bold"
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    }
});