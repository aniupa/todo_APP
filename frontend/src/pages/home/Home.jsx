import  {  useState } from "react";
import Header from "../../components/header/Header.jsx";
import "./home.css";
import { useFilterTasks } from "../.././hooks/filterTasks.jsx";

const Home = () => {
  const [task, setTask] = useState([]);
  const [inputVal, setinputVal] = useState("");
  const { pendingList, completeList, renderList ,addNewTask} = useFilterTasks(
    task,
    setTask,
    inputVal,
    setinputVal
    
  );


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
        <button type="submit" onClick={addNewTask}>
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
            All <br /> {renderList}
          </div>
          <div>
            pending <br /> {pendingList}
          </div>
          <div>
            completed <br /> {completeList}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
