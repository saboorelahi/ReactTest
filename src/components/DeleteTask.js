import { useState, useEffect } from "react";
import Task from "./Task";

const DeleteTask = () => {
  const [uncheckedTasks, setUnCheckedTasks] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasks = JSON.parse(window.localStorage.getItem("tasks"));
    setTasks(tasks);
    setUnCheckedTasks(tasks);
  }, []);

  const updateCheckedTasks = (id, checked) => {
    if (!checked) {
      const reAddedTask = tasks.filter(t => t.id === id)
      setUnCheckedTasks([...uncheckedTasks, ...reAddedTask]);
      return;
    }

    const updatedUnCheckedTasksList = uncheckedTasks.filter(t => t.id !== id)
    setUnCheckedTasks(updatedUnCheckedTasksList);
  };

  const deleteTasks = () => {
    const updatedTasks = [...uncheckedTasks] || [];
    setTasks(updatedTasks);
    window.localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleUpdateCheckedTask = (e) => {
    const { value: id, checked } = e.target;
    updateCheckedTasks(id, checked);
  };

  return (
    <div>
      {tasks && tasks.map(({ name, id }, index) => (
        <div key={id}>
          <Task
            key={id}
            value={id}
            name={name}
            updateCheckedTask={handleUpdateCheckedTask}
            showSelectCheckbox
          />
        </div>
      ))}
      <br />
      <button onClick={deleteTasks}>Delete</button>
    </div>
  );
};

export default DeleteTask;
