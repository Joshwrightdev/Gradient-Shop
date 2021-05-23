import { Switch, Route } from "react-router-dom";
import Home from "./components/CartIcon/Home";
import "./App.scss";
import NotFound from "./components/Not-Found";
import Shop from "./components/Pages/shop";
import CartPage from "./components/Pages/CartPage/page";
import SingleProduct from "./components/Single-Product";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/product/:id" component={SingleProduct} />
        <Route path="/cart" component={CartPage} />
        <Route path="*" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
