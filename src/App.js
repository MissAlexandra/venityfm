
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./components/pages/home/Home";
import UserList from "./components/pages/userList/UserList";
import User from "./components/pages/user/User";
import NewUser from "./components/pages/newUser/NewUser";
import Login from "./components/login/Login";
import Requests from "./components/pages/requests/Requests";
import Venityfm from "./components/mainpage/Venityfm";
import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar/>
        <Switch>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route path="/users">
            <UserList/>
          </Route>
          <Route path="/user/:userId">
            <User/>
          </Route>
          <Route path="/NewUser">
            <NewUser/>
          </Route>
          <Route path="/Requests">
            <Requests/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/">
            <Venityfm/>
          </Route>
        </Switch>
      </div>

    </Router>
  );
  
}

export default App;
