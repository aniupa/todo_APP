import { useEffect, useMemo } from "react";
import uniqid from "uniqid";

export const useFilterTasks = (task, setTask, inputVal, setinputVal) => {
  const handleCheck = (index, status) => {
    const updatedTask = task.map((item) =>
      index === item.id ? { ...item, isCompleted: status } : item,
    );
    setTask(updatedTask);
    localStorage.setItem("tasks", JSON.stringify(updatedTask));
  };
  useEffect(() => {
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTask(existingTasks);
  }, []);

  const addNewTask = () => {
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    const newTask = { task: inputVal, isCompleted: false, id: uniqid() };
    const updatedTasks = [...existingTasks, newTask];

    setTask(updatedTasks);
    setinputVal("");
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };
  const pendingTasks = task.filter((item) => item.isCompleted === false);
  const completedTasks = task.filter((item) => item.isCompleted === true);
  const pendingList =
    pendingTasks.length > 0 ? (
      <ol>
        {pendingTasks.map((item) => (
          <li key={item.id}>
            {item.task}{" "}
            <input
              type="checkbox"
              checked={item.isCompleted}
              onChange={(e) => handleCheck(item.id, e.target.checked)}
            />{" "}
          </li>
        ))}
      </ol>
    ) : (
      <> empty</>
    );
  const completeList =
    completedTasks.length > 0 ? (
      <ol>
        {completedTasks.map((item) => (
          <li key={item.id}>
            {item.task}{" "}
            <input
              type="checkbox"
              checked={item.isCompleted}
              onChange={(e) => handleCheck(item.id, e.target.checked)}
            />{" "}
          </li>
        ))}
      </ol>
    ) : (
      <>empty</>
    );

  const renderList =
    task && task.length > 0 ? (
      <>
        <ol>
          {task.map((item) => (
            <li key={item.id}>
              {item.task}
              <input
                type="checkbox"
                checked={item.isCompleted}
                onChange={(e) => handleCheck(item.id, e.target.checked)}
              />
            </li>
          ))}
        </ol>
      </>
    ) : (
      <>empty</>
    );

  return { pendingList, completeList, addNewTask, renderList };
};
