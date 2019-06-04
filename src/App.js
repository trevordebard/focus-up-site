import React from 'react';
import './App.css';
import Header from './Components/Header'
import About from './Components/About';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Privacy from './Components/Privacy';


function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/privacy" component={Privacy} />
    </Router>
  );
}        
const Home = () => (
  <div>
    <Header/>
    <About/>
  </div>
)
export default App;