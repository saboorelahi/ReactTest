import { useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const Button = styled.button`
  color: white;
  background-color: green;
`

const CreateTask = () => {
  const [taskName, setTaskName] = useState("");
  const history = useHistory();

  // If we want to add in local storage/store without button click we can use it
  /* useEffect(() => {
	}, [taskName]); */

  const taskChanged = (e) => {
    setTaskName(e.target.value);
  };

  const redirectToTasks = () => {
    history.push("/list-tasks");
  };

  const createNewTask = (e) => {
    const previousTasks = JSON.parse(window.localStorage.getItem("tasks")) || [];
    const newTask = {
      id: uuidv4(), // we can use some other mechanism for ids as well
      name: taskName,
    };

    const newTasks = [...previousTasks, newTask];
    window.localStorage.setItem("tasks", JSON.stringify(newTasks));

    redirectToTasks();
  };

  return (
    <div>
      <input onChange={taskChanged} value={taskName} />
      <Button onClick={createNewTask}>Add Task</Button>
    </div>
  );
};

export default CreateTask;
