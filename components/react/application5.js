import React, { useEffect, useState } from "react";


export default function Clock2() {
    const [date, setDate] = useState(new Date());

    const UpdateClock = () => {
        setDate(new Date());
    }

    useEffect(() => {
        const minuterie = setInterval(
            () => UpdateClock(),
            1000
        );

        return () => clearInterval(minuterie);
    });

    return (
        <>
            <h1>Heure : {date.toLocaleTimeString()}</h1>
        </>
    );
}

