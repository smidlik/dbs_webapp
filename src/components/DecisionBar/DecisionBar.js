import React from 'react';
import DecisionItem from "./DecisionItem";
import buttonNames from "./constants/button";

const DecisionBar = () => {
    return (
        <div className={'Content FlexCenter'}>
            {buttonNames.map((name)=> <DecisionItem name={name}/>)}
        </div>
    );
}


export default DecisionBar;
