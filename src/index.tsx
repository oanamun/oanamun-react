import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "./pages/about";
import Experience from "./pages/experience";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Header from "./components/header";
import Footer from "./components/footer";
import { Helmet } from "react-helmet";
import projectStyles from "./style.module.css";

const App = () => {
  return (
    <Router>
      <Helmet>
        <title>Oana Muntean</title>
        <meta
          name="description"
          content="Hi I'm Oana and I am a front-end developer"
        />
        <meta property="og:title" content="Oana Muntean" />
        <meta
          property="og:description"
          content="Hi I'm Oana and I am a front-end developer"
        />
        <meta
          property="og:image"
          content="https://storage.googleapis.com/playground-bucket.teleporthq.io/7e16ba118516a80f6a1c5025c3a89fc9"
        />
      </Helmet>

      <div className={projectStyles.container}>
        <Header />
        <Route exact component={Home} path="/" />
        <Route exact component={About} path="/about" />
        <Route exact component={Experience} path="/experience" />
        <Route exact component={Projects} path="/projects" />
        <Footer />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
