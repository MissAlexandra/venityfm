
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Topasset from "./components/topbar/Topassets";
import Home from "./components/pages/home/Home";
import UserList from "./components/pages/userList/UserList";
import User from "./components/pages/user/User";
import NewUser from "./components/pages/newUser/NewUser";
import Login from "./components/login/Login";
import Requests from "./components/pages/requests/Requests";
import Venityfm from "./components/mainpage/Venityfm";
import "./app.css";
import LoginButton from './components/LoginButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const { isLoading } = useAuth0();

  

  return (
    <Router>
      <Topbar />
      <Topasset />
      <div className="container">
        <Sidebar/>
        <LoginButton />
        
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
