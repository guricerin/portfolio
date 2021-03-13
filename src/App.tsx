import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HomePage } from "./pages/Home";
import { WorksPage } from "./pages/Works";
import { CareerPage } from "./pages/Career";
import "bulma/css/bulma.css";
import "./css/sticky-footer.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <div className="sf-site-all">
          <NavBar />
          <Hero />
          <div className="sf-site-content">
            <div className="section">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/works" component={WorksPage} />
                <Route exact path="/career" component={CareerPage} />
              </Switch>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
