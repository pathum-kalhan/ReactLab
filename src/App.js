import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import MenuTemplate from "./components/MenuTemplates";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/menu" exact component={MenuTemplate}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
