import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {getMovies} from 'C:/Users/vikas/Desktop/NewReactApp/login-flow-master/js/utils/req.js';
class MovieProfile extends Component {
   constructor(props) {
    super(props);
    this.state = {
      title:'',
      created: '',
      director:'',
      edited: '',
      episode_id:'',
      opening_crawl:''
  };
}
componentWillMount() {
   getMovies(this.props.params.id).then(results => {
      this.setState({
        title:results.data.title,
        created: results.data.created,
        director: results.data.director,
        edited: results.data.edited,
        episode_id:results.data.episode_id,
        opening_crawl: results.data.opening_crawl
      })
    });
  }
render() {
return(
<div>
        <h1>Movie Details</h1>
        <div><h2>Title:</h2>{this.state.title}</div>
        <div><h2>Created:</h2>{this.state.created}</div>
        <div><h2>Director: </h2>{this.state.director}</div>
          <div><h2>Edited:</h2>{this.state.edited}</div>
        <div><h2>Episode_id:</h2> {this.state.episode_id}cm</div>
        <div><h2>opening_crawl: </h2>{this.state.opening_crawl}</div>
         
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
export default connect(select)(MovieProfile);
