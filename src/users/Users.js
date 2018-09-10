import React,{Component} from 'react';
import User from './User';

class Users extends Component{

state={
  users:[
    {name:"Lacazette",goals:2,assist:1},
    {name:"Aubameyang",goals:1,assist:1},
    {name:"Ozil",goals:1,assist:1},
    {name:"Lacazette",goals:2,assist:1},
    {name:"Aubameyang",goals:1,assist:1},
    {name:"Ozil",goals:1,assist:1}
  ],
  title:"Player List"
}
setCurrentState=(newState)=>{
  this.setState({
    newState
  });
}
makeGoal=(userDy)=>{
  const newState=this.state.users.map((user)=>{
  const tempuser=user;
    if(userDy.name==tempuser.name){
    tempuser.goals+=1;
  }
    return tempuser;
  });
this.setCurrentState(newState);
console.log(newState);
}

makeAssist=(userDy)=>{
  const newState=this.state.users.map((user)=>{
    const tempUser=user;
    if(userDy.name==tempUser.name){
      tempUser.assist+=1;
    }
    return tempUser;
  });
  this.setCurrentState(newState);
}
render(){

return(
  <div>
  <h1>{this.state.title}</h1>
  <table>
  {
    this.state.users.map((user)=>{
      return (<User parentMethodAssist={this.makeAssist} parentMethodGoal={this.makeGoal} obj={user} goals={user.goals} assist={user.assist}>{user.name}</User>
        //  <button onClick={()=>this.makeAssist(user)}>Assist Provided</button>
      )
    })

  }
  </table>
  </div>
)

}

}

export default Users;
