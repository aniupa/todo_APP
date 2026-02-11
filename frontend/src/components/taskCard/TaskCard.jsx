import React, { useContext } from "react";
import { MyContext } from "../../context/context";
import './card.css'

const TaskCard = ({ task, isCompleted ,id}) => {
  const { tasks ,setTasks} = useContext(MyContext); 
  const handleCheck = (index, status) => {
    
    
    const updatedTask = tasks.map((item) =>
      index === item.id ? { ...item, isCompleted: status } : item,
    );
    setTasks(updatedTask);
    localStorage.setItem("tasks", JSON.stringify(updatedTask));
  };
  return (
    <section className="card">
      <input className="taskInput" style={isCompleted ? {textDecoration:'line-through'}:{}} type="text" placeholder={task} />
      <input type="checkbox"  checked={isCompleted} onChange={(e)=>handleCheck(id,e.target.checked)}/>
    </section>
  );
};

export default TaskCard;
