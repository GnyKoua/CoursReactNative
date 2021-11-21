import React from "react";

function Etudiant1(props) {

    let moyenne = (parseInt(props.noteEC) + (parseInt(props.notePR) * 2)) / 3;

    if (moyenne > 10) {
        return (<>
            <h1>Nom : {props.nom}</h1>
            <h1>Moyenne : {moyenne}</h1>
        </>)
    } else {
        let date = new Date();
        date.setMonth(date.getMonth() + 1);

        return (<>
            <h1>Nom : {props.nom}</h1>
            <h1>Moyenne : {moyenne}</h1>
            <h1>Date 2è session : {date.toLocaleDateString()}</h1>
        </>)
    }
}

export default Etudiant1;