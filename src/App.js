import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import TodoList from './Tasks/TodoList/TodoList'; // Importáld a First komponenst
import CounterButton from './Tasks/CounterButton/CounterButton'; // Importáld a Second komponenst
import TextDisplay from './Tasks/TextDisplay/TextDisplay'; // Importáld a Third komponenst

function Home() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <h1>The tasks on this website are based on ideas from <a href="https://medium.com/@rohan.fulzele/50-beginner-and-intermediate-level-react-project-ideas-%EF%B8%8F-809b396faa39">Rohan Fulzele's article on Medium.</a></h1>
      <button onClick={() => navigate("/tasks/todolist")} type="button"> Task 1 </button>
      <button onClick={() => navigate("/tasks/counterbutton")} type="button"> Task Bonus 1 </button>
      <button onClick={() => navigate("/tasks/textdisplay")} type="button"> Task Bonus 2 </button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Tasks/TodoList" element={<TodoList />} />
        <Route path="/Tasks/CounterButton" element={<CounterButton />} />
        <Route path="/Tasks/TextDisplay" element={<TextDisplay />} />
      </Routes>
    </Router>
  );
}

export default App;
