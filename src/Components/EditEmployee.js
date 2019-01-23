import React, { Component } from 'react';
 import axios from 'axios';
 
 const customStyle = {
 width: '300px',
 margin: '0 auto'
 }
 
 class EditEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        }
    }
 
    componentDidMount = () => {
       this.getEmployeeById();
    }
 
    // To get employee based on ID
    getEmployeeById() {
        axios.get('http://localhost:4000/employees/editEmp/' + this.props.match.params.id).then(
            (response) => {
                console.log('In getEmployeeById' + response);
                this.setState({
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    email: response.data.email,
                    phone: response.data.phone
                });
            }).catch(
                (error) => {
                console.log(error);
            });
    }
 
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
 
    // To update the record on submit
    handleSubmit = (event) => {
        event.preventDefault();
        const { firstName, lastName, email, phone } = this.state;
        console.log(this.props.match.params.id);
        console.log(firstName + ' ' + lastName + ' ' + email +' ' + phone);
        axios.post('http://localhost:4000/employees/updateEmp/', {
            _id: this.props.match.params.id,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
        }).then(
            (response) => {
            console.log(response);
            this.props.history.push('/');
        }).catch(
            (error) => {
            console.log(error);
        });        
    }
 
    render() {
        return (
        <div className="container">
            <form style={customStyle} onSubmit={this.handleSubmit}>
                <br/>
                <h3> Edit Employee Details </h3>
                <br/>
                <br/>

                <label> First Name
                    <input name="firstName" type="text" value={this.state.firstName}
                    onChange={this.handleChange} className="form-control" />
                </label>
                <br />

                <label>Last Name
                    <input name="lastName" type="text" value={this.state.lastName}
                    onChange={this.handleChange} className="form-control" />
                </label>
                <br />

                <label>Email
                    <input name="email" type="text" value={this.state.email}
                    onChange={this.handleChange} className="form-control" />
                </label>
                <br />

                <label> Phone No
                    <input name="phone" type="text" value={this.state.phone}
                    onChange={this.handleChange} className="form-control" />
                </label>
                <br />

                <input type="submit" value="submit" className="btn btn-primary" />
            </form>
        </div>
        );
    }
 }
 
 export default EditEmployee;