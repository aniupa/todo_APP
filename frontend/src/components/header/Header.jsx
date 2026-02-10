import "./header.css";
import { useFilterTasks } from "../../hooks/filterTasks";
import { useContext } from "react";
import { MyContext } from "../../context/context";
const Header = () => {
  const { inputVal, setInputVal } = useContext(MyContext);
  const { addNewTask } = useFilterTasks(inputVal, setInputVal);
  return (
    <header>
      <span style={{display:"flex" ,width:'100%',justifyContent:"space-between"}}>
        <span>Todo list</span> <span>toggle</span>
      </span>
      <section>
        <input
          
          type="text"
          id="add"
          placeholder="add new task"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
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
