import React from 'react';
import './DetailsForm.css';

const ShowCards = (props) => {
    const showCardsInRows = props.lists.map((formValue)=>{
        return(
            <div className="margin-top-set" key={formValue.phone-5555555555}>
                <div className="card customCard">
                    <div className="card-header">
                        <label className="customFontHead">{formValue.username}</label><br/>
                        <label className="customFontBody">Score: {formValue.score}</label>
                    </div>
                    <div className="card-body">
                        <label className="customFontFooter">Email: {formValue.email}</label><br/>
                        <label className="customFontFooter">Contact: {formValue.phone}</label>
                    </div>
                </div>
            </div>
        );
    })
    return (
        <div>{showCardsInRows}</div>
    )
}

export default ShowCards
