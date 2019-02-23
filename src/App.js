import React, { Component } from 'react';
import './App.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Link,
} from "react-router-dom";

const Page1 = React.lazy(() => import('./react/01 - controlled components/index'))
const Page2 = React.lazy(() => import('./react/02 - state management'))
const Page3 = React.lazy(() => import('./react/03 - hooks'))
const Links = React.lazy(() => import('./links'))

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <div>
              <Link to="/">Home</Link>
              <hr />

              <React.Suspense fallback='Loading...'>
                <Route exact path="/" component={() => <Links />} />
                <Route path="/01" component={(props) => <Page1 {...props} />} />
                <Route path="/02" component={(props) => <Page2 {...props} />} />
                <Route path="/03" component={(props) => <Page3 {...props} />} />
              </React.Suspense>

            </div>
          </Router>
        </header>
      </div>
    )
  }
}

export default App
