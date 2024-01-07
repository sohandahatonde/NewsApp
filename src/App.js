import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default class App extends Component {
  pageSize = 5;
  render() {
    return (
      <>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<News key='general' Pagesize={this.pageSize} country="in" category='general' />}></Route>
            <Route exact path='/Business' element={<News key='Business' Pagesize={this.pageSize} country="in" category='Business' />}></Route>
            <Route exact path='/Entertainment' element={<News key='Entertainment'  Pagesize={this.pageSize} country="in" category='Entertainment' />}></Route>
            <Route exact path='/Health' element={<News key='Health'  Pagesize={this.pageSize} country="in" category='Health' />}></Route>
            <Route exact path='/Science' element={<News key='Science'  Pagesize={this.pageSize} country="in" category='Science' />}></Route>
            <Route exact path='/Sports' element={<News  key='Sports' Pagesize={this.pageSize} country="in" category='Sports' />}></Route>
            <Route exact path='/Technology' element={<News  key='Technology'  Pagesize={this.pageSize} country="in" category='Technology' />}></Route>        
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}
