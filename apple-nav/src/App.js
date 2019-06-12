import React from 'react';
import './App.css';
import {Link, Route, Switch} from 'react-router-dom';
import Home from './components/Home'
import Subpage from './components/SubPage'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: black;
  
  a {
    color: white;
  }
`

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
            <StyledDiv className="TopBar">
              <Link to="/">Home</Link>
              <Link to="/subpage">Subpage</Link>
            </StyledDiv>
            <Switch>
              <Route
                exact
                path="/"
                render={ (props) => <Home {...props} />}/>
              <Route
                path="/subpage"
                render={ (props) => <Subpage {...props} />}/>
              {/* <Route exact path="/" component={Home}/> */}
            </Switch>
          </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
