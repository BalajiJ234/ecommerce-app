import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
/*import Nav from "./components/nav";
import Login from "./components/login";
import DataTable from "./components/datatable";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home";
import About from "./components/material-temp/about";
import Contact from "./components/contact";
import Register from "./components/register";
*/
function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/users" component={DataTable} />
        <Route path="/about" component={About} />
        <Route path="/users" component={DataTable} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/" component={Home} />
        <Redirect from="/home" to="/" />
      </Switch>
    </div>
  );
}

export default App;
