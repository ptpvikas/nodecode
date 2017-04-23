/*
 * HomePage
 *
 * The Dashboard is only visible to logged in users
 * Route: /dashboard
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router';
import User from './User';
class Users extends Component {
   constructor(props) {
    super(props);
    this.state = {
      users: [],
      id:0
  };
  }
    
  componentWillMount() {
  axios.get('http://swapi.co/api/people').then(results => {
      this.setState({
        users: results.data.results
      })
    });
      
  }
  render() {
    let users=this.state.users;
    return (

      <div>
<h1> Starwars</h1>
      {users.map(user=>{
       let id=user.url.split('/')[5];
       return <User name={user.name} id={id} key={user.name}/>
     }
     )

     }    
      </div>
    );
  }
}

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(Users);