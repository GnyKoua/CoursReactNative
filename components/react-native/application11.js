import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeCount } from '../../redux/actions/count';


class Application11 extends Component {

    constructor(props) {
        super(props);
    }

    decrementCount() {
        let { counter, actions } = this.props;
        counter.count--;
        actions.changeCount(counter.count);
    }

    incrementCount() {
        let { counter, actions } = this.props;
        counter.count++;
        actions.changeCount(counter.count);
    }

    render() {
        const { counter } = this.props;

        return (
            <View styles={styles.container}>
                <Button
                    title="increment"
                    onPress={() => this.incrementCount()}
                />
                <Text>{counter.count}</Text>
                <Button
                    title="decrement"
                    onPress={() => this.decrementCount()}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const mapStateToProps = state => {
    return {
        counter: state.count
    }
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        changeCount
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Application11)