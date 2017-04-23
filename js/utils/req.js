import axios from 'axios'

let getPeople = function() 
{
  return axios.get('http://swapi.co/api/people/')
}

let getPerson = function(id) {
  return axios.get('http://swapi.co/api/people/' + id)
}
let getMoviesList = function(id) {
  return axios.get('http://swapi.co/api/films/' )
}
let getMovies = function(id) {
  return axios.get('http://swapi.co/api/films/' + id)
}

export { getPeople, getPerson,getMoviesList,getMovies }
