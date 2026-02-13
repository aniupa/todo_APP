import "./header.css";
import { useFilterTasks } from "../../hooks/filterTasks";
import { useContext, useState } from "react";
import { MyContext } from "../../context/context";
import { useEffect } from "react";
import { MoonIcon } from "../../utilits/icons/icons";
const Header = () => {
  const { inputVal, setInputVal } = useContext(MyContext);
  const [theme, setTheme] = useState("dark");
  const { addNewTask } = useFilterTasks(inputVal, setInputVal);
  const toggleTheme = () => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  };
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  return (
    <header>
      <span className="heroToggleContainer">
        <span style={{ fontSize: "var(--font-lg)" }}>Todo list</span>{" "}
        <span style={{ width: "20px" }} onClick={toggleTheme}>
          {MoonIcon}
        </span>
      </span>
      <section className="addTasksMb">
        <input
          className="taskInput"
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
      <section className="addTasksPc">
        <label htmlFor="add">Add new task</label>
        <input
          className="taskInput"
          type="text"
          id="add"
          placeholder=" eg: buy milk "
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
