import { useContext, useState } from "react";
import Header from "../../components/header/Header.jsx";
import "./home.css";
import { useFilterTasks } from "../.././hooks/filterTasks.jsx";
import { MyContext } from "../../context/context.jsx";

const Home = () => {
  const [filterPg, setFilterPg] = useState(1);

  const { tasks, setTasks, inputVal, setInputVal } = useContext(MyContext);
  const { pendingList, completeList, renderList } = useFilterTasks(
    tasks,
    setTasks,
    inputVal,
    setInputVal,
  );

  return (
    <div className="container">
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <section>
          {" "}
          <span
            onClick={() =>
              filterPg >= 2 ? setFilterPg(filterPg - 1) : filterPg
            }
          >
            <svg
              style={{
                width: "15px",
                color: `${filterPg > 1 ? "red" : "grey"}`,
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
            </svg>
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
          >
            <svg
              style={{
                width: "15px",
                color: `${filterPg < 3 ? "red" : "grey"}`,
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
            </svg>
          </span>{" "}
        </section>
      </div>
      <section className="tasksContainer">
        {" "}
        {
          (filterPg === 1 && renderList )||
            (filterPg === 2 && pendingList) ||
            (filterPg === 3 && completeList)}
      
      </section>
    </div>
  );
};

export default Home;
