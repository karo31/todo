import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home({ result }) {
  const [numbers, setNumbers] = useState([0, 0]);

  const handleCalculate = () => {
    window.electron.ipcRenderer.sendMessage('perform-operation', numbers);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <div className="d-flex flex-column g-5">
        <div className="inline-form">
          <input
            type="number"
            value={numbers[0]}
            onChange={(e) =>
              setNumbers([parseInt(e.target.value, 10), numbers[1]])
            }
          />
          <input
            type="number"
            value={numbers[1]}
            onChange={(e) =>
              setNumbers([numbers[0], parseInt(e.target.value, 10)])
            }
          />
          <button onClick={handleCalculate} type="button">
            Calculate
          </button>
        </div>

        <Link to="/results">Go to Results</Link>
      </div>
    </div>
  );
}

export default Home;
