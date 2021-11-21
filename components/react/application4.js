import React from "react";

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.minuterie = setInterval(
            () => this.UpdateClock(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.minuterie);
    }

    UpdateClock() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <>
                <h1>Heure : {this.state.date.toLocaleTimeString()}</h1>
            </>
        );
    }
}
