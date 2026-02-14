import {  useState } from "react";
import Header from "../../components/header/Header.jsx";
import "./home.css";
import { useFilterTasks } from "../.././hooks/filterTasks.jsx";
import { LeftArrowIcon, RightArrowIcon } from "../../utilits/icons/icons.jsx";
const Home = () => {
  const [filterPg, setFilterPg] = useState(1);
  const [filterPgPc, setFilterPgPc] = useState("all");

  const { pendingList, completeList, renderList, Count } = useFilterTasks(
    
    
  );

  return (
    <div className="mainContainer">
      <div className="container">
        <Header />
        {/* mobile styled filter */}
        <div className="tasksContainer">
          {/* filter toggle option only in mobile */}
          <div className="filterToggleMb">
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
              {filterPg === 1 && "Tasks"}
              {filterPg === 2 && "Pending "}
              {filterPg === 3 && "Completed "}
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
          </div>
          <div className="tasksContainerMb">
            {" "}
            {(filterPg === 1 && renderList) ||
              (filterPg === 2 && pendingList) ||
              (filterPg === 3 && completeList)}
          </div>
          {/* Pc styled filter layout only visible in  pc*/}
          <div className="left">
            <h3>Stats & filters</h3>
            <hr />
            <br />
            <span
              onClick={() => setFilterPgPc("pending")}
              className={filterPgPc === "pending" ? "isActive" : "notActive"}
            >
              Pending :{Count.pendingCount}
            </span>
            <br />
            <span
              className={filterPgPc === "all" ? "isActive" : "notActive"}
              onClick={() => setFilterPgPc("all")}
            >
              All tasks : {Count.all}
            </span>
            <br />
            <span
              className={filterPgPc === "completed" ? "isActive" : "notActive"}
              onClick={() => setFilterPgPc("completed")}
            >
              Completed tasks :{Count.completedCount || 0}
            </span>
          </div>
          <div className="right">
            {/* pc filter tasks container */}{" "}
            <div className="rightHead">
              <h2>{filterPgPc} Tasks</h2>
              <hr />
            </div>
            <div className="rightBody">
            {(filterPgPc === "pending" && pendingList) ||
              (filterPgPc === "all" && renderList) ||
              (filterPgPc === "completed" && completeList)}</div>
          </div>
        </div>
      </div>
    {console.log('render')}
    </div>
    
  );
};

export default Home;
