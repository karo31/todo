import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { useEffect, useState } from 'react';
import Home from './Home';
import Results from './Result';

export default function App() {
  const [result, setResult] = useState(0);

  function handleResult(arg) {
    setResult(arg);
  }
  useEffect(() => {
    window.electron.ipcRenderer.on('operation-result', handleResult);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/results" element={<Results result={result} />} />
        <Route path="/" element={<Home result={result} />} />
      </Routes>
    </Router>
  );
}
