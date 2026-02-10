import { useState,useEffect } from "react";
import { MyContext } from "./context";

export const Wrapper = ({ children }) => {
  const [inputVal, setInputVal] = useState("");
  const [task, setTask] = useState([]);
   useEffect(() => {
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTask(existingTasks);
  }, []);
  

  return (
    <MyContext.Provider value={{ inputVal, setInputVal, task, setTask }}>
      {children}
    </MyContext.Provider>
  );
};
