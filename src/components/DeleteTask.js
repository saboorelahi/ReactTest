import { useState, useEffect } from "react";

const DeleteTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasks = JSON.parse(window.localStorage.getItem("tasks"));
    setTasks(tasks);
  }, []);

  return (
    <div>
      <div>
				{/* In progress delete */}
      </div>
    </div>
  );
};

export default DeleteTask;
