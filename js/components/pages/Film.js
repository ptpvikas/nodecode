import React from 'react';
import { Link } from 'react-router';
function Film(props)
{
  return(
    <div className="Film">
    <div>
    <Link to={'/films/' + props.id}>Movie {props.id} </Link>
    </div>
    </div>
  )
}
export default Film;