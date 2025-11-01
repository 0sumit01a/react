import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LiveInput from './components/LiveInput';
import MultiStateForm from './components/MultiStateForm';
import ObjectForm from './components/ObjectForm';
import TodoApp from './components/TodoApp';
const App = () => {
  return (
      <Router>
      <div style={{ textAlign: "center" }}>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/">Live Input</Link> |{" "}
          <Link to="/form">Form</Link> |{" "}
          <Link to="/object">Object Form</Link> |{" "}
          <Link to="/todos">Todo List</Link>
        </nav>

        <Routes>
          <Route path="/" element={<LiveInput />} />
          <Route path="/form" element={<MultiStateForm />} />
          <Route path="/object" element={<ObjectForm />} />
          <Route path="/todos" element={<TodoApp />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
