import './App.css';
import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import DetailsForm from './components/DetailsForm';
import ShowCards from './components/ShowCards';

function App() {
  const [formValues, setFormValues] = useState([]);
  const getFormValues = (username, email, score, phone) => {
    setFormValues([...formValues, {username:username, email:email, score:score, phone:phone}]);
  }
  
  return (
    <div className="backgroundSet">
      <NavigationBar title="Master's Programs Score Card Form"/>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-xl-3 col-md-12 col-sm-12 col-xs-12">
            <DetailsForm sendFormValues={getFormValues} />
          </div>
          <div className="col-lg-3 col-xl-3 col-md-0 col-sm-0 col-xs-0"></div>
          <div className="col-lg-6 col-xl-3 col-md-12 col-sm-12 col-xs-12">
            <ShowCards lists={formValues} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
