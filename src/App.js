import './App.css';
import Tasks from './components/Tasks';
import CreateTask from './components/CreateTask';
import DeleteTask from './components/DeleteTask';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/">
              <Tasks />
            </Route>
            <Route path="/list-tasks">
              <Tasks />
            </Route>
            <Route path="/create-task">
              <CreateTask />
            </Route>
            <Route path="/bulk-delete">
              <DeleteTask />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
