import React, { Component } from 'react';
import './DetailsForm.css';

export class DetailsForm extends Component {
    state = {
        username:"",
        email:"",
        score:"",
        phone:""
    }
    submitClick = (e) => {
        e.preventDefault();
        if(this.state.username==="" || this.state.email==="" || this.state.score==="" || this.state.phone==="") {
            alert("All fields are mandatory");
        }
        else {
            this.props.sendFormValues(this.state.username, this.state.email, this.state.score, this.state.phone);
            this.setState({username:"", email:"", score:"", phone:""});
        }
    }
    render() {
        return (
            <div className="margin-top-set">
                <div className="display-4 text-muted" id="contact-heading">Score Cards Form</div>
                <div className="card margin-top-set">
                    <div className="card-header">
                        <div className="row">
                            <div className="lead">Fill Details</div>
                        </div>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.submitClick} autoComplete="off">
                            <label htmlFor="username">Username:</label><br/>
                            <input type="text" value={this.state.username} onChange={(e)=>this.setState({username:e.target.value})} name="username" className="form-control" placeholder="Enter Username here"></input><br/>
                            <label htmlFor="email">Email:</label><br/>
                            <input type="email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} name="email" className="form-control" placeholder="Enter your Email Address"></input><br/>
                            <label htmlFor="score">Score:</label><br/>
                            <input type="number" value={this.state.score} onChange={(e)=>this.setState({score:e.target.value})} name="score" max="340" min="260" className="form-control" placeholder="Enter your score"></input><br/>
                            <label htmlFor="phone">Phone Number:</label><br/>
                            <input type="number" value={this.state.phone} onChange={(e)=>this.setState({phone:e.target.value})} name="phone" max="9999999999" min="5999999999" className="form-control" placeholder="Enter your Phone Number"></input><br/>
                            <button className="btn btn-outline-primary form-control" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailsForm
