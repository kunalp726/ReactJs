import React, { Component,Fragment } from 'react';
import './App.css';
import {BrowserRouter as Router,NavLink,Link,Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Users from './users/Users';
import About from './About/about';
import Home from './Home';
import Navbar from "./Navbar";
import NavbarTwo from "./NavbarTwo";
import AppRoute from  "./AppRoute"
class Main extends Component {

  constructor(){
    super()
    this.state={
      users:[
        {id:0,name:"Lacazette",goals:2,assist:1},
        {id:1,name:"Aubameyang",goals:1,assist:1},
        {id:2,name:"Ozil",goals:1,assist:1},
        {id:3,name:"Torreira",goals:2,assist:1},
        {id:4,name:"Mkhitaryan",goals:1,assist:1},
        {id:5,name:"Ramsey",goals:1,assist:1}
      ],
      title:"Player List",
      path:[
        {url:"/",
        type:1,
        component:Home
        },{
          url:"/users",
          type:2,
          component:Users
        },{
          url:"/about",
          type:2,
          component:About
        }
        ]
    }
  }
  
  render() {
  
    return (
      <div className="main-parent">
        <div className="background"></div>
        <Router>  
        <Fragment>
          {
            this.state.path.map((obj)=>{
              if(obj.type===1){
              return(<AppRoute path={obj.url} exact layout={Navbar}  component={obj.component} objstate={this.state}></AppRoute>)
              }else{
                return(<AppRoute path={obj.url} exact layout={NavbarTwo} objstate={this.state}  component={obj.component}></AppRoute>) 
              }
            })
          }     
        {/* <AppRoute path="/users" exact strict component={Users}>
       
        </AppRoute>
        <AppRoute path="/about" exact strict component={About}></AppRoute> */}
        </Fragment>
      </Router>
      </div>
    )
  }
}

export default Main;
