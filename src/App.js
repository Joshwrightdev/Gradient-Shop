import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.scss";
import NotFound from "./components/Not-Found";
import Shop from "./components/Pages/shop";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
