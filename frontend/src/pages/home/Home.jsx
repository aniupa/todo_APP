import { useContext, useState } from "react";
import Header from "../../components/header/Header.jsx";
import "./home.css";
import { useFilterTasks } from "../.././hooks/filterTasks.jsx";
import { MyContext } from "../../context/context.jsx";
import { LeftArrowIcon, RightArrowIcon } from "../../utilits/icons/icons.jsx";
const Home = () => {
  const [filterPg, setFilterPg] = useState(1);
  const [filterPgPc, setFilterPgPc] = useState("all");

  const { tasks, setTasks, inputVal, setInputVal } = useContext(MyContext);
  const { pendingList, completeList, renderList } = useFilterTasks(
    tasks,
    setTasks,
    inputVal,
    setInputVal,
  );

  return (
    <div className="mainContainer">
      <div className="container">
        <Header />
        {/* mobile styled filter */}
        <div className="filterToggleMb">
          <section>
            {" "}
            <span
              onClick={() =>
                filterPg >= 2 ? setFilterPg(filterPg - 1) : filterPg
              }
              style={{
                color: `${filterPg > 1 ? "red" : "var(--text-dim)"}`,
              }}
            >
              {LeftArrowIcon}
            </span>
            <span style={{ margin: " var(--margin-sm)" }}>
              {filterPg === 1 && "all tasks"}
              {filterPg === 2 && "pending tasks"}
              {filterPg === 3 && "completed tasks"}
            </span>
            <span
              onClick={() =>
                filterPg <= 2 ? setFilterPg(filterPg + 1) : filterPg
              }
              style={{
                color: `${filterPg < 3 ? "red" : "var(--text-dim)"}`,
              }}
            >
              {RightArrowIcon}
            </span>{" "}
          </section>
        </div>
        {/* Pc styled filter */}
        <section className="tasksContainerPc">
          <div className="left">
            <h3>Stats & filters</h3>
            <hr />
            <br />
            <span
              onClick={() => setFilterPgPc("pending")}
              className={filterPgPc === "pending" ? "isActive" : {}}
            >
              Pending :
            </span>
            <br />
            <span
              className={filterPgPc === "all" ? "isActive" : {}}
              onClick={() => setFilterPgPc("all")}
            >
              All tasks :
            </span>
            <br />
            <span
              className={filterPgPc === "completed" ? "isActive" : {}}
              onClick={() => setFilterPgPc("completed")}
            >
              Completed tasks :
            </span>
          </div>
          <div className="right">
            {/* pc filter tasks container */} <h2>{filterPgPc} Tasks</h2><hr />
            
            {(filterPgPc === "pending" && pendingList) ||
              (filterPgPc === "all" && renderList) ||
              (filterPgPc === "completed" && completeList)}
          </div>
          {/*  */}
        </section>
        <section className="tasksContainerMb">
          {" "}
          {(filterPg === 1 && renderList) ||
            (filterPg === 2 && pendingList) ||
            (filterPg === 3 && completeList)}
        </section>
      </div>
    </div>
  );
};

export default Home;
