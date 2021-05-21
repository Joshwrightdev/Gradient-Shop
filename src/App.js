import Header from "./components/Header/index";
import Hero from "./components/Hero/index";
import Main from "./components/Main/index";
import Footer from "./components/Footer/index";
import FeaturedCollection from "./components/Featured-Collection/index";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Main />
      <FeaturedCollection />
      <Footer />
    </div>
  );
}

export default App;
