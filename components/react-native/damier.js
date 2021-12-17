import React from "react";
import { StyleSheet, View } from "react-native";

const Damier = () => {
    const items = [1, 2, 3, 4, 5, 6];

    return (
        <View style={styles.container}>
            <View style={styles.damier}>
                {
                    items.map((row) => {
                        if (row % 2 == 0) {
                            return (
                                <View style={styles.row} key={row}>
                                    {
                                        items.map((column) => {
                                            if (column % 2 == 0) {
                                                return <View style={styles.blackBox} key={row + '' + column} />
                                            } else {
                                                return <View style={styles.whiteBox} key={row + '' + column} />
                                            }
                                        })
                                    }
                                </View>
                            );
                        } else {
                            return (
                                <View style={styles.row} key={row}>
                                    {
                                        items.map((column) => {
                                            if (column % 2 == 1) {
                                                return <View style={styles.blackBox} key={row + '' + column} />
                                            } else {
                                                return <View style={styles.whiteBox} key={row + '' + column} />
                                            }
                                        })
                                    }
                                </View>
                            );
                        }
                    })
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    damier: {
        borderWidth: 1
    },
    row: {
        flexDirection: "row"
    },
    blackBox: {
        width: 50,
        height: 50,
        flex: 1,
        backgroundColor: "black"
    },
    whiteBox: {
        width: 50,
        height: 50,
        flex: 1,
        backgroundColor: "white"
    }
});

export default Damier;