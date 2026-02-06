import React, { useContext, useState } from "react";
import Header from "../../components/header/Header.jsx";
import "./home.css";
const Home = () => {
  const [task, setTask] = useState([]);
  const [inputVal, setinputVal] = useState("");

  const addTaskHandler = (data) => {
    if (!inputVal.trim()) return;
    // setTask(inputVal);
    let existingTask = JSON.parse(localStorage.getItem("tasks")) || [];
    let updatedTasks=[...existingTask,inputVal];

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };
  const renderAllTasks = () => {
    // StylePropertyMap
    // task.map((item,i)=> {item, i})
    let items = localStorage.getItem(JSON.stringify("taskName"));
    setTask({ inputVal });
    console.log(task);

    // return <>"task"</>
  };
  return (
    <div className="container">
      <Header />
      <section>
        <input
          style={{
            border: "none",
            backgroundColor: "var(--bg-ter)",
            padding: "2px var(--padding-sm)",
          }}
          type="text"
          id="add"
          placeholder="add new task"
          value={inputVal}
          onChange={(e) => setinputVal(e.target.value)}
        />{" "}
        {/* <br /> */}
        <button type="submit" onClick={addTaskHandler}>
          Add
        </button>
      </section>
      <section>
        {/* <span>filters</span> */}
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <div>
            All <br /> {task}
          </div>
          <div>pending </div>
          <div>completed </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
