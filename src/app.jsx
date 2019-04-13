import ReactDOM from 'react-dom'
import React from 'react'

import {BrowserRouter as Router, Switch, Redirect, Route, Link} from 'react-router-dom'

//页面
import Home from 'page/home/index.jsx'
import Show from 'page/show/index.jsx'
import News from 'page/news/index.jsx'

//页面组件
import ShowGroup from 'component/showGroup/index.jsx'
import ShowMentor from 'component/showMentor/index.jsx'
import ShowProject from 'component/showProject/index.jsx'
class App extends React.Component{
  render(){
    let ShowRouter = (
      <Show>
        <Switch>
          <Route exact path="/show/group" component={ShowGroup} />
          <Route exact path="/show/mentor" component={ShowMentor} />
          <Route exact path="/show/project" component={ShowProject} />
          <Redirect exact from="/show" to="/show/group"/>
        </Switch>
      </Show>
    );
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/show" render={props => ShowRouter} />
          <Route path ="/news" component={News} />
        </Switch>
      </Router>
    )
  }
}
ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('root')
)