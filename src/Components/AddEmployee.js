import React, { Component } from 'react';
import axios from 'axios';

const custStyle = {
    width: '300px',
    margin: '0 auto'
}

class AddEmployee extends Component {

    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        }       
    }

    // When value changes of any field
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });        
    }

    // To add new employee when user submit data.
    handleSubmit = (event) => {
        event.preventDefault();
        const { firstName, lastName, email, phone } = this.state;
        axios.post('http://localhost:4000/employees/addEmp', {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone
        }).then( (response) => {
                console.log(response);
                this.props.history.push('/');
            }
        ).catch( (error) => {
                console.log(error);
            }
        );
    }

    render(){
        return (
            <div className='container'>
                <form style={custStyle} onSubmit={this.handleSubmit}>
                    <label>First Name
                        <input name='firstName' type='text' value={this.state.firstName}
                        onChange={this.handleChange} className="form-control"></input>
                    </label>
                    <br />

                    <label>Last Name
                        <input name="lastName" type="text" value={this.state.lastName}
                        onChange={this.handleChange} className="form-control"></input>
                    </label>
                    <br/>

                    <label>Email
                        <input name="email" type="text" value={this.state.email}
                        onChange={this.handleChange} className="form-control"></input>
                    </label>
                    <br/>

                    <label>Phone No
                        <input name="phone" type="text" value={this.state.phone}
                        onChange={this.handleChange} className="form-control"></input>
                    </label>
                    <br/>

                    <input type="submit" value="submit" className="btn btn-primary"></input>
                </form>
            </div>
        );
    }
}

export default AddEmployee;