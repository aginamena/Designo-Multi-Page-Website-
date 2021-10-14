
import Homepage from './components/Homepage.js';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import GetInTouch from './components/GetInTouch';
import Designs from './components/Designs';
import { useEffect, useState } from 'react';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Locations from './components/Locations';

function App() {
  const [data, setData] = useState({});
  const [design, setDesign] = useState({});
  useEffect(() =>
    fetch("./data.json")
      .then(response => response.json())
      .then(result => setData(result))
    , []);

  function changeDesign(name) {
    if (name == "WEB DESIGN") setDesign(data.Web_Design)
    else if (name == "GRAPHIC DESIGN") setDesign(data.Graphic_Design)
    else setDesign(data.App_Design);
  }
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Homepage goUp={name => changeDesign(name)} />
        </Route>
        <Route exact path="/Designs">
          <Designs input={!!design && design} goUp={name => changeDesign(name)} />
        </Route>
        <Route exact path="/AboutUs">
          <AboutUs />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
        <Route exact path="/Location">
          <Locations />
        </Route>
      </Switch>
      <Footer />
      <div className="container" id="getInTouchContainer">
        <GetInTouch />
      </div>
    </Router>
  );
}

export default App;
