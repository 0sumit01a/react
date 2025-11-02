import React from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Basic from './components/Basic';
import TimerApp from './components/TimerApp';
import AsyncFetch from './components/AsyncFetch';
const App = () => {
  return (
    <Router>
      <div style={{textAlign:"center"}}>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/">Home</Link> |{" "}
          <Link to="/TimerApp">TimerApp</Link>
          <Link to='/joke'>Jokes fetch</Link>

        </nav>
        <Routes>
          <Route path="/" element={<Basic/>} />
          <Route path="/TimerApp" element={<TimerApp/>}/>
          <Route path="/joke" element={<AsyncFetch/>}/> 
        </Routes>
      </div>
    </Router>

  )}

export default App
