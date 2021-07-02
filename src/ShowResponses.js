import React from 'react';
import './components/DetailsForm.css';

const ShowResponses = (props) => {
    const display = props.responseReceived.map((field)=>{return ''});
    return (
        <div className="container">
            {display}
            <div class="margin-top-set">
                {props.requestSent}
            </div>
        </div>
    )
}

export default ShowResponses
