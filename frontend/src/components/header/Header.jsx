import "./header.css";
import { useFilterTasks } from "../../hooks/filterTasks";
import { useContext, useState } from "react";
import { MyContext } from "../../context/context";
import { useEffect } from "react";
const Header = () => {
  const { inputVal, setInputVal } = useContext(MyContext);
  const [ theme, setTheme ] = useState('dark');
  const { addNewTask } = useFilterTasks(inputVal, setInputVal);
 const toggleTheme=()=>{
  setTheme(t=>t==='dark'? 'light':'dark');
 }
 useEffect(()=>{
 document.documentElement.dataset.theme=theme;
},[theme]);
  return (
    <header>
      <span
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <span>Todo list</span> <span onClick={toggleTheme}>toggle</span>
      </span>
      <section>
        <input className="taskInput"
          type="text"
          id="add"
          placeholder="add new task"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={(e) => e.key == "Enter" && addNewTask()}
        />{" "}
        {/* <br /> */}
        <button type="submit" onClick={addNewTask}>
          Add
        </button>
      </section>
    </header>
  );
};

export default Header;
