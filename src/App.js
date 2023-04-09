import logo from './logo.svg';
import Landing from './Components/Landing.jsx';
import './App.css';
import React, { useEffect, useState } from 'react';


function App() {

  let currenTime = new Date();
  const [time, settime] = useState(currenTime)
  const tick = () => settime(new Date())

  useEffect(() => {
    setInterval(tick, 1000);

  }, [])

  return (
    <div className="App">
      <Landing currentTime={time} />
    </div>
  );
}

export default App;
