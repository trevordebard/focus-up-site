import React from "react";
import "./App.css";
import Header from "./Components/Header";
import About from "./Components/About";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Privacy from "./Components/Privacy";
import Faq from "./Components/Faq";
import ReactGA from "react-ga";

ReactGA.initialize("UA-141688771-1");
ReactGA.pageview("/");
ReactGA.pageview("/privacy");
ReactGA.pageview("/faq");

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/faq" component={Faq} />
    </Router>
  );
}
const Home = () => (
  <div>
    <Header />
    <About />
  </div>
);
export default App;
