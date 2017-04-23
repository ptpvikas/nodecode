
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router';
class Movies extends Component {
   
  render() {
    
    return (

      <div>
<h1> Starwars Movies</h1>
  
      </div>
    );
  }
}

// Which props do we want to inject, given the global state?


// Wrap the component to inject dispatch and state into it
export default Movies;