import { useState,useEffect } from "react";
import { MyContext } from "./context";

export const Wrapper = ({ children }) => {
  const [inputVal, setInputVal] = useState("");
  const [tasks, setTasks] = useState([]);
   useEffect(() => {
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(existingTasks);
  }, []);
  

  return (
    <MyContext.Provider value={{ inputVal, setInputVal, tasks, setTasks }}>
      {children}
    </MyContext.Provider>
  );
};
