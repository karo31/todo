import React from 'react';
import { Link } from 'react-router-dom';

function Result({ result }) {
  return (
    <div>
      <h1>Results Page</h1>
      <p>Result: {result}</p>
      <Link to="/">Go Back</Link>
    </div>
  );
}



export default Result;
