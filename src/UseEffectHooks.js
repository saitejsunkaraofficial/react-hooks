import React, {useState, useEffect} from 'react';
import NavigationBar from './components/NavigationBar';
import './components/DetailsForm.css';
import ShowResponses from './ShowResponses';
import 'bootstrap/dist/css/bootstrap.min.css';

const UseEffectHooks = () => {
    const [routeLink, setRouteLink] = useState('');
    const [responseReceived, setResponseReceived] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/'+routeLink)
        .then(response => response.json())
        .then(json => {
            setResponseReceived(json); 
            console.log(json);
        });
    }, [routeLink])

    return (
        <div>
        <NavigationBar title="React Use Effect Practice"/>
        <div className="container margin-top-set">
            <div className="row">
                <div className="col-2">
                    <button className="btn btn-outline-primary" onClick={()=>{setRouteLink('posts')}}>Posts</button>
                </div>
                <div className="col-2">
                    <button className="btn btn-outline-secondary" onClick={()=>{setRouteLink('comments')}}>Comments</button>
                </div>
                <div className="col-2">
                    <button className="btn btn-outline-info" onClick={()=>{setRouteLink('albums')}}>Albums</button>
                </div>
                <div className="col-2">
                    <button className="btn btn-outline-success" onClick={()=>{setRouteLink('photos')}}>Photos</button>
                </div>
                <div className="col-2">
                    <button className="btn btn-outline-danger" onClick={()=>{setRouteLink('todos')}}>To-do's</button>
                </div>
                <div className="col-2">
                    <button className="btn btn-outline-dark" onClick={()=>{setRouteLink('users')}}>Users</button>
                </div>
            </div>
        </div>
        <ShowResponses responseReceived={responseReceived} requestSent={routeLink} />
        </div>
    )
}

export default UseEffectHooks
