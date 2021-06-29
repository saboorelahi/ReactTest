import { useState, useEffect } from "react";
import Task from './Task';

// Assumption: We don't need to clear local storage on page refresh!
const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  // We can use context api library or redux etc as well
  useEffect(() => {
		const tasks = JSON.parse(window.localStorage.getItem('tasks'));
    setTasks(tasks);
	}, []);

  return (
    <div>
      <div>
        {tasks && tasks.map(({ id, name }) => (
          <Task key={id} name={name} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;