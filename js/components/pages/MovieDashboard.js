import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router';
import Film from './Film';
class MovieDashboard extends Component {
   constructor(props) {
    super(props);
    this.state = {
      films: [],
      id:0
  };
  }
  
  
  componentWillMount() {
  axios.get('http://swapi.co/api/films').then(results => {
      this.setState({
        films: results.data.results
      })
    });
      
  }
  
  render() {
    let films=this.state.films;
    return (

        <div>
<h1> Films</h1>
      {films.map(film=>{
       let id=moive.url.split('/')[5];
       return <Film name={film.name} id={id} key={film.name}/>
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
export default connect(select)(MovieDashboard);