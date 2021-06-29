import styled from "styled-components";

const Card = styled.div`
  padding: 8px;
  background-color: green;
  border: 2px solid green;
  margin-top: 3px;
  color: white;
  width: 200px;
`;

const Task = ({ name, value, updateCheckedTask, showSelectCheckbox }) => {
  return (
    <div>
      <Card>
				{showSelectCheckbox && <input type="checkbox" value={value} onClick={updateCheckedTask} />}
				{name}
			</Card>
    </div>
  );
};

export default Task;