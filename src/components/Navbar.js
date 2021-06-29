import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>Task Creater</h1>
      <Link to="/list-tasks">List Tasks</Link>
			<br />
      <Link to="/create-task">Create Task</Link>
			<br />
      <Link to="/bulk-delete">Delete Tasks</Link>
    </div>
  );
};

export default Navbar;
