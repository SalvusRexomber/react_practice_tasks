import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import "./TodoList.css";
import { useEffect } from "react";
import { gapi } from "gapi-script";

function TodoList() {

/* Google Calendar API LOGICS*/
function handleSendToCalendar(e) {
  return;
};

  
/* Google Calendar API END */



  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [taskDate, setTaskDate] = useState("");
  let navigate = useNavigate();

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }



  function addTask(e) {
    e.preventDefault();
    if (taskInput && taskDate) {
      const newTask = {
        id: new Date().getTime(),
        text: taskInput,
        date: taskDate,
        isDone: false,
      };
      setTasks([...tasks, newTask]);
      setTaskInput("");
      setTaskDate("");
    } 
  };


  return (
    <div>
      <h1>To-Do List App</h1>
      <p>Create a simple to-do list app with features to add, mark as done, and delete tasks.</p>
        <button onClick={() => navigate("/")}>Back to the main page</button> 
      <div iclass="todoContainer">
        <form class="todoForm" onSubmit={addTask}>
          <div class="todoInput">
            <input type="text" id="todoInput" placeholder="Add a task..." value={taskInput} onChange={(e) => setTaskInput(e.target.value)}/>
            <input type="date" id="todoDate" value={taskDate} onChange={(e) => setTaskDate(e.target.value)}/>
            <button type="submit">Add Task</button>
          </div>
        </form>
        <ul className="todoList">
          {tasks.map((task) => (
            <li key={task.id} className="todoListItem">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() =>
                  setTasks(
                    tasks.map((t) =>
                      t.id === task.id ? { ...t, completed: !t.completed } : t
                    )
                  )
                }
              />
              <span className="taskText">{task.text}</span>
              <span className="taskDate">{task.date}</span>
              <button className="deleteButton" onClick={() => deleteTask(task.id)}>Delete</button>
              <button className="sendToCalendarButton" onClick={() => handleSendToCalendar(task)}>Send to Calendar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;


