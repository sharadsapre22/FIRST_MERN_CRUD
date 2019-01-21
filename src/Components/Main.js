import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import ListEmployee from './ListEmployee';
import AddEmployee from './AddEmployee';
import EditEmployee from './EditEmployee';

class Main extends Component {
    render(){
        return (
            <main>
                <Switch>
                    <Route exact path='/' component = { ListEmployee } />
                    <Route exact path='/list' component = { ListEmployee } />
                    <Route exact path='/addEmp' component = { AddEmployee } />
                    <Route exact path='/editEmp/:id' component = { EditEmployee } />
                </Switch>
            </main>
        );
    }
}

export default Main;