import React from 'react'
import About from './components/About/About'
import Home from './components/Home/Home'
import ClassList from './components/ClassList/ClassList'
import Student from './components/Student/Student'
import {Route, Switch} from 'react-router-dom'

export default (
 <Switch>
  <Route exact path='/' component={Home}/>
  <Route path='/about' component={About}/>
  <Route path='/classlist/:class' component={ClassList}/>
  <Route path='/student/:class/:id' component={Student}/>
 </Switch>
)