import React from 'react';
import Etudiant1 from './application1';
import Etudiant2 from './application2';
import Etudiant3 from './application3';
import Clock from './application4';
import Clock2 from './application5';

export default function AppForReact() {
  return (
    <div>
      <h1 style={{ color: 'red' }}>Application 1 :</h1>
      <Etudiant1 nom="ABCD" noteEC="12" notePR="15" />
      <hr />

      <h1 style={{ color: 'red' }}>Application 2 :</h1>
      <Etudiant2 />
      <hr />

      <h1 style={{ color: 'red' }}>Application 3 :</h1>
      <Etudiant3 />
      <hr />

      <h1 style={{ color: 'red' }}>Application 4 :</h1>
      <Clock />
      <hr />

      <h1 style={{ color: 'red' }}>Application 5 :</h1>
      <Clock2 />

    </div>
  );
}
