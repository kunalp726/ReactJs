import React,{Component,Fragment} from 'react';
import {BrowserRouter as Router,NavLink,Link,Switch,Route} from 'react-router-dom';


 const AppRoute =({component:Component,layout:Layout,...rest})=>{
    

   console.log('approute render');
   console.log(rest);
    return(
        <Route {...rest} component={(props) => {
            console.log('Route Render: ')
            console.log(props);
            return(
                <Fragment>
          <Layout></Layout>
          <Component {...rest}></Component>
          </Fragment>
        )}} ></Route>
      )

}
export default AppRoute;