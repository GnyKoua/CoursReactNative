import * as React from 'react';
import { Animated, Button, View } from 'react-native'

export class ImageZoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isZoomed: false,
            imageSize: new Animated.Value(100),
            buttonTexte: "Zoom (+)"
        }
    }

    changeButtonTexte = (texte) => {
        this.setState({ buttonTexte: texte });
    }

    zoom = () => {
        if (this.state.isZoomed) {
            Animated.timing(this.state.imageSize, {
                toValue: 100,
                duration: 1500,
                useNativeDriver: true
            }).start();
            this.changeButtonTexte("Zoom (+)");
            this.setState({ isZoomed: false });
        } else {
            Animated.timing(this.state.imageSize, {
                toValue: 500,
                duration: 1500,
                useNativeDriver: true
            }).start();
            this.changeButtonTexte("Zoom (-)");
            this.setState({ isZoomed: true });
        }
    }

    render() {
        return (
            <View style={{
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Animated.Image source={{
                    uri: "https://th.bing.com/th/id/OIP.J_9skOg6Up8-h0Dd6OfagwHaE8?w=232&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
                }}
                    style={{
                        height: this.state.imageSize,
                        width: this.state.imageSize
                    }} />
                <Button title={this.state.buttonTexte} onPress={() => this.zoom()} />
            </View>
        );
    }
}