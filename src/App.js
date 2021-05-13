import logo from './logo.svg';
import './App.css';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom';
import { Button, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import UserLogin from './UserLogin';
import AdminCheck from './AdminCheck';
import Home from './Home';
import AdminDashboard from './AdminDashboard';
import AddUser from './AddUsers';
import EditUser from './EditUser';
import Users from './Users';
import LoginType from './LoginType';
import Userpage from './UserPage';
import AddAmount from './AddAmount';
import CurrentBalance from './CurrentBalance';
import SubAmount from './SubAmount';
import CurrentWithBalance from './CurrentWithBalance';
import UserView from './UserView';
import LoginInfo from './LoginType';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <div className="App">
            <Navbar bg="dark" variant="dark" sticky="top">
              <Navbar.Brand href="#home">ABC Banking Application</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link>
                  <Link to="/loginInfo">Home</Link>
                </Nav.Link>
              </Nav>
              <Navbar.Text>{this.props.userData}</Navbar.Text>
              <Nav.Link>
                <Link to="/home">Logout</Link>
              </Nav.Link>
            </Navbar>
            <Switch>
              <Route exact path="/"><Redirect to="/home" /></Route>
              <Route path="/logininfo" component={LoginInfo}></Route>
              <Route path="/admin" component={AdminCheck}></Route>
              <Route path="/user" component={UserLogin}></Route>
              <Route path="/admindashboard" component={AdminDashboard}></Route>
              <Route path="/logintype" component={LoginType}></Route>
              <Route path="/userpage" component={Userpage}></Route>
              <Route path="/addamount" component={AddAmount}></Route>
              <Route path="/currentadd" component={CurrentBalance}></Route>
              <Route path="/subamount" component={SubAmount}></Route>
              <Route path="/currentsub" component={CurrentWithBalance}></Route>
              <Route path="/view/:id" component={UserView}></Route>
              <Route path="/home" component={Home}></Route>
              <Route path="/add" component={AddUser}></Route>
              <Route path="/edit/:id" component={EditUser}></Route>
              <Route path="/users/:id" component={Users}></Route>
              <Route path="**">
                <div>404 not found</div>
              </Route>
            </Switch>

          </div>
        </Router>

      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return ({ userData: state.userData })
}
export default connect(mapStateToProps)(App);