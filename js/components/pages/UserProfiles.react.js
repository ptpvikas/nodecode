import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {getPerson} from 'C:/Users/vikas/Desktop/NewReactApp/login-flow-master/js/utils/req.js';
import Film from './Film';
class UserProfile extends Component {
   constructor(props) {
    super(props);
    this.state = {
      name: '',
      gender:'',
      eyeColor: '',
      height: '',
      mass:'',
      skinColor:'',
      birthyear:'',
      hairColor:'',
      films:[],
      };
}
componentWillMount()
 {
   getPerson(this.props.params.id).then(results => {
      this.setState({
        name: results.data.name,
        eyeColor: results.data.eye_color,
        height: results.data.height,
        gender:results.data.gender,
        mass: results.data.mass,
        birthyear:results.data.birth_year,
        skinColor:results.data.skin_color,
        hairColor:results.data.hair_color,
      films:results.data.films})
    });
  }

render() 
{
  let films=this.state.films
return(
<div>
        <h1>User Profile:</h1>
        <div>Name: {this.state.name}</div>
        <div>Eye Color: {this.state.eyeColor}</div>
          <div>DOB:{this.state.birthyear}</div>
        <div>Height: {this.state.height}cm</div>
        <div>gender: {this.state.gender}</div>
          <div>mass: {this.state.mass}cm</div>
        <div>hairColor: {this.state.hairColor}</div>
        <div>skinColor:{this.state.skinColor}</div>
        <div>Films:</div>
        {films.map((film,i)=>{
let id=film.split('/')[5];
return <Film id={id} key={i+1}/>
        })
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
export default connect(select)(UserProfile);
