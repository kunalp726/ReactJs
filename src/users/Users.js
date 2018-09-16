import React,{Component} from 'react';
import User from './User';

class Users extends Component{

state={
  users:[
    {name:"Lacazette",goals:2,assist:1},
    {name:"Aubameyang",goals:1,assist:1},
    {name:"Ozil",goals:1,assist:1},
    {name:"Torreira",goals:2,assist:1},
    {name:"Mkhitaryan",goals:1,assist:1},
    {name:"Ramsey",goals:1,assist:1}
  ],
  title:"Player List"
}

setCurrentState=(newState)=>{
  this.setState({
    users:newState
  });
}

changeGoalsText=(e,userDy)=>{
  const newState=this.state.users.map((user)=>{
    const tempuser=user;
      if(userDy.name==tempuser.name){
        if(! (isNaN(e.target.value))){
      tempuser.goals=e.target.value;
        }
    }
      return tempuser;
    });
  this.setCurrentState(newState);
}
changeAssistText=(e,userDy)=>{
  const newState=this.state.users.map((user)=>{
    const tempuser=user;
      if(userDy.name==tempuser.name){
        if(! (isNaN(e.target.value))){
      tempuser.assist=e.target.value;
        }
    }
      return tempuser;
    });
  this.setCurrentState(newState);
}   

makeGoal=(id)=>{
  const newState=this.state.users;
  var val=parseInt(newState[id].goals);
      if(isNaN(val)){
        val=0;
      }
      newState[id].goals=val+1;
  // const newState=this.state.users.map((user)=>{
  // const tempuser=user;
  //   if(userDy.name==tempuser.name){
  //     var val=parseInt(tempuser.goals);
  //     if(val==NaN){
  //       val=0;
  //     }
  //     tempuser.goals=val+1;
  // }
  //   return tempuser;
  // });
this.setCurrentState(newState);
}

makeAssist=(userDy)=>{
  const newState=this.state.users.map((user)=>{
    const tempUser=user;
    if(userDy.name==tempUser.name){
      var val=parseInt(tempUser.assist);
      if(val==NaN){
        val=0;
      }
      tempUser.assist=val+1;
    }
    return tempUser;
  });
  this.setCurrentState(newState);
}
render(){

return(
  <div>
  <h1 className="heading-parent">{this.state.title}</h1>
  <table>
  {
    this.state.users.map((user,index)=>{
      return (<User id={index} parentAssistText={this.changeAssistText} parentGoalsText={this.changeGoalsText} parentMethodAssist={this.makeAssist} parentMethodGoal={this.makeGoal} obj={user} goals={user.goals} assist={user.assist}>{user.name}</User>
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
