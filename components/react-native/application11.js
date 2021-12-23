import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeCount } from '../../redux/actions/count';


class Application11 extends Component {

    constructor(props){
        super(props);
    }

    decrementCount() {
        let { count, actions } = this.props;
        count--;
        actions.changeCount(count);
    }

    incrementCount() {
        let { count, actions } = this.props;
        count++;
        actions.changeCount(count);
    }

    render() {
        const { count } = this.props;
        return (
            <View styles={styles.container}>
                <Button
                    title="increment"
                    onPress={() => this.incrementCount()}
                />
                <Text>{count}</Text>
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

const mapStateToProps = state => ({
    count: state.count,
});

const ActionCreators = Object.assign(
    {},
    changeCount,
);
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Application11)