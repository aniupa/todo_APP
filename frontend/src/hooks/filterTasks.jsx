import { useContext } from "react";
import uniqid from "uniqid";
import { MyContext } from "../context/context";
import TaskCard from "../components/taskCard/TaskCard";
import { toast } from "react-toastify";

export const useFilterTasks = () => {
  const { tasks, setTasks, inputVal, setInputVal } = useContext(MyContext);

  const addNewTask = () => {
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    const newTask = { task: inputVal, isCompleted: false, id: uniqid() };
    const updatedTasks = [...existingTasks, newTask];

    setTasks(updatedTasks);
    setInputVal("");
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    toast.success("task added!!!");
  };

  const pendingTasks = tasks.filter((item) => item.isCompleted === false);
  const completedTasks = tasks.filter((item) => item.isCompleted === true);

  const pendingList = pendingTasks.map((item) => (
    <TaskCard
      task={item.task}
      key={item.id}
      id={item.id}
      isCompleted={item.isCompleted}
    />
  ));

  const completeList = completedTasks.map((item) => (
    <TaskCard
      task={item.task}
      key={item.id}
      isCompleted={item.isCompleted}
      id={item.id}
    />
  ));

  const renderList = tasks.map((item) => (
    <TaskCard
      task={item.task}
      key={item.id}
      isCompleted={item.isCompleted}
      id={item.id}
    />
  ));

  const Count = {
    all: tasks.length,
    pendingCount: pendingTasks.length,
    completedCount: completedTasks.length,
  };
  return { pendingList, completeList, addNewTask, renderList, Count };
};
