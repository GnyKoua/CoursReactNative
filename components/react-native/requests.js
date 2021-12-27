import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import myAxios from '../../my-axios';
import { addUserFetch, addUserAxios } from '../../redux/actions/users';


export const Requetes = ({ navigation, route }) => {
    const [datasFetch, SetDatasFetch] = useState(null);
    const [datasAxios, SetDatasAxios] = useState(null);
    const [loadingFetch, SetLoadingFetch] = useState(false);
    const [loadingAxios, SetLoadingAxios] = useState(false);
    const dispatch = useDispatch();
    const actions = bindActionCreators({
        addUserFetch,
        addUserAxios
    }, dispatch);

    useEffect(() => {

    }, []);

    const getDatasWithFetch = () => {
        SetLoadingFetch(true);
        fetch("https://randomuser.me/api/")
            .then(async res => {
                const reponse = await res.json();
                if (reponse.results.length > 0) {
                    SetDatasFetch(reponse.results[0]);
                    SetLoadingFetch(false);
                    actions.addUserFetch(reponse.results[0]);
                }
            }).catch(err => {
                SetDatasFetch(err.toString());
                SetLoadingFetch(false);
            });
    }

    const getDatasWithAxios = () => {
        SetLoadingAxios(true);
        myAxios.get("https://randomuser.me/api/")
            .then(res => {
                if (res.data) {
                    if (res.data.results.length > 0) {
                        SetDatasAxios(res.data.results[0]);
                        SetLoadingAxios(false);
                        actions.addUserAxios(res.data.results[0]);
                    }
                }
            }).catch(err => {
                SetDatasAxios(err.toString());
                SetLoadingAxios(false);
            });
    }

    const DisplayUser = (datas) => {
        if (datas) {
            return (
                <View>
                    <Image style={{
                        width: 80,
                        height: 80,
                        borderRadius: 50
                    }} source={{ uri: datas.picture.large }} />
                    <Text>
                        {datas.name.title} {datas.name.last} {datas.name.first}
                    </Text>
                    <Text>{datas.phone}</Text>
                    <Text>{datas.cell}</Text>
                    <Text>{datas.email}</Text>
                </View>
            );
        }
    }

    return (
        <View style={styles.center}>
            <Text style={[styles.padding, {
                fontSize: 35
            }, styles.bold]}>Requêtes HTTP</Text>
            <View style={[styles.center, {
                flexDirection: "row"
            }]}>
                <View style={styles.padding}>
                    <Button title="Tester avec Fetch"
                        onPress={
                            () => getDatasWithFetch()
                        } />
                </View>
                <View style={styles.padding}>
                    <Button title="Tester avec Axios"
                        onPress={
                            () => getDatasWithAxios()
                        } />
                </View>
            </View>
            <View style={styles.padding}>
                <View style={styles.padding}>
                    <View style={styles.padding}>
                        <Text style={[styles.padding, styles.bold]}>
                            Résultat des requêtes HTTP avec Fetch :
                        </Text>
                        {
                            loadingFetch ?
                                <ActivityIndicator size="large" color="grey" /> :
                                DisplayUser(datasFetch)
                        }
                    </View>
                    <View style={styles.padding}>
                        <Text style={[styles.padding, styles.bold]}>
                            Résultat des requêtes HTTP avec Axios :
                        </Text>
                        {
                            loadingAxios ?
                                <ActivityIndicator size="large" color="grey" /> :
                                DisplayUser(datasAxios)
                        }
                    </View>
                </View>
            </View>
        </View>
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
    }
});