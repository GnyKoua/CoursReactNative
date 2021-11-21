import React from "react";

class Etudiant2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: "Kouakou Komenan",
            moyenne: 12,
            date: new Date()
        };
    }

    Regenerer() {
        this.setState({
            moyenne: Math.round(Math.random() * 20)
        }, () => {
            if (this.state.moyenne <= 10) {
                let date = new Date();
                date.setMonth(date.getMonth() + 1);
                this.setState({ date: date });
            }
        });
    }

    render() {
        if (this.state.moyenne > 10) {
            return (
                <div>
                    <h1>Nom : {this.state.nom}</h1>
                    <h1>Moyenne : {this.state.moyenne}</h1>
                    <button type="button" onClick={() => this.Regenerer()} >Régénérer</button>
                </div>
            );
        } else {

            return (
                <div>
                    <h1>Nom : {this.state.nom}</h1>
                    <h1>Moyenne : {this.state.moyenne}</h1>
                    <h1>Date : {this.state.date.toLocaleDateString()}</h1>
                    <button type="button" onClick={() => this.Regenerer()} >Régénérer</button>
                </div>
            );
        }
    }
}

export default Etudiant2;