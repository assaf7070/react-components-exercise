import Spam from "./Spam";
import React, { Component } from 'react';


const Spamalot = () => {
    const spamArray = [...Array(500)].map(() => <Spam />);
    return <div id="ex-2">{spamArray}</div>;

}

export default Spamalot

