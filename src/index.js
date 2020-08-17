import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import About from './views/about'
import Experience from './views/experience'
import Home from './views/home'
import Projects from './views/projects'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={About} path="/about" />
        <Route exact component={Experience} path="/experience" />
        <Route exact component={Home} path="/" />
        <Route exact component={Projects} path="/projects" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
