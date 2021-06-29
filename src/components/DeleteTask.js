import { useState, useEffect } from "react";

const DeleteTask = () => {
  const [uncheckedTasks, setUnCheckedTasks] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasks = JSON.parse(window.localStorage.getItem("tasks"));
    setTasks(tasks);
		setUnCheckedTasks(tasks);
  }, []);
	
  const updateCheckedTasks = (e) => {
    const { value: index, checked } = e.target;

    if (!checked) {
      setUnCheckedTasks([...uncheckedTasks, tasks[index]]);
      return;
    }

    const updatedCheckedList = [...uncheckedTasks];
    updatedCheckedList.splice(index, 1);
		setUnCheckedTasks(updatedCheckedList);
  };

	const deleteTasks = () => {
		const updatedTasks = [ ...uncheckedTasks ];
		setTasks(updatedTasks);
    window.localStorage.setItem('tasks', JSON.stringify(updatedTasks));
	};

  return (
    <div>
      {tasks.map(({ name, id }, index) => (
        <div key={id}>
          <input type="checkbox" value={index} onClick={updateCheckedTasks} />
          <span>{name}</span>
        </div>
      ))}
			<br />
			<button onClick={deleteTasks}>Delete</button>
    </div>
  );
};

export default DeleteTask;