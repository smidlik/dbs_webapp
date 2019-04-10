import React from 'react';
import {Link} from "react-router-dom";


const DecisionItem = ({name}) => {

        return (
            <div className={'Content FlexCenter'}>

                <Link
                    to={'/result/'+ name}
                    className={'Button'}>
                    {name}
                </Link>

            </div>
        );
    };


export default DecisionItem;
