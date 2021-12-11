import React, { useState } from "react";

function Etudiant3(props) {
    const [nom, setNom] = useState("Kouakou Komenan");
    const [moyenne, setMoyenne] = useState(12);
    const [date, setDate] = useState(new Date());

    const Regenerer = () => {
        // setMoyenne(Math.round(Math.random() * 20));


        setMoyenne(() => {
            let newMoyenne = Math.round(Math.random() * 20);
            if (newMoyenne <= 10) {
                let date = new Date();
                date.setMonth(date.getMonth() + 1);
                setDate(date);
            }

            return newMoyenne;
        });
    }

    if (moyenne > 10) {
        return (
            <div>
                <h1>Nom : {nom}</h1>
                <h1>Moyenne : {moyenne}</h1>
                <button type="button" onClick={() => Regenerer()} >Régénérer</button>
            </div>
        );
    } else {

        return (
            <div>
                <h1>Nom : {nom}</h1>
                <h1>Moyenne : {moyenne}</h1>
                <h1>Date : {date.toGMTString()}</h1>
                <button type="button" onClick={() => Regenerer()} >Régénérer</button>
            </div>
        );
    }
}

export default Etudiant3;