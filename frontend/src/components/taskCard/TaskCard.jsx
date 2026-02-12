import React, { useContext, useState } from "react";
import { MyContext } from "../../context/context";
import "./card.css";
import { binIcon } from "../../utilits/icons/icons.jsx";
import { toast } from "react-toastify";

const TaskCard = ({ task, isCompleted, id }) => {
  const { tasks, setTasks } = useContext(MyContext);
  const [updateVal, setUpdateVal] = useState("");
  const handleCheck = (index, status) => {
    const updatedTask = tasks.map((item) =>
      index === item.id ? { ...item, isCompleted: status } : item,
    );
    setTasks(updatedTask);
    localStorage.setItem("tasks", JSON.stringify(updatedTask));
  };
  const handleUpdate = (index) => {
    const updatedTask = tasks.map((item) =>
      index === item.id ? { ...item, task: updateVal } : item,
    );
    setTasks(updatedTask);
    localStorage.setItem("tasks", JSON.stringify(updatedTask));
    setUpdateVal("");
    toast.success("task updated!!!");
  };
  const handleDel = (index) => {
    const updatedTask = tasks.filter((item) => index !== item.id);

    setTasks(updatedTask);
    localStorage.setItem("tasks", JSON.stringify(updatedTask));
    setUpdateVal("");
    toast.success("task deleted!!!");
  };

  return (
    <section className="card">
      <input
        className="taskInput"
        style={isCompleted ? { textDecoration: "line-through" } : {}}
        type="text"
        placeholder={task}
        onChange={(e) => setUpdateVal(e.target.value)}
        onKeyDown={(e) => e.key == "Enter" && handleUpdate(id)}
      />
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={(e) => handleCheck(id, e.target.checked)}
      />
      <span onClick={() => handleDel(id)}>{binIcon}</span>
    </section>
  );
};

export default TaskCard;
