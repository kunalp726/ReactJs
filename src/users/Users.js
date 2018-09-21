import React,{Component} from 'react';
import User from './User';

class Users extends Component{  

  constructor(props){
    super(props)
    // this.state={
    //   testProperty:"Empty",
    //   users:[
    //     {id:0,name:"Giroud",goals:2,assist:1},
    //     {id:1,name:"Messi",goals:1,assist:1}
    //   ]
    // }
  }


setCurrentState=(newState)=>{
  this.props.context.setState({
    users:newState
  });
}

changeGoalsText=(e,userDy)=>{
  const newState=this.props.objstate.users.map((user)=>{
    const tempuser=user;
      if(userDy.name===tempuser.name){
        if(! (isNaN(e.target.value))){
      tempuser.goals=e.target.value;
        }
    }
      return tempuser;
    });
  this.setCurrentState(newState);
}
changeAssistText=(e,userDy)=>{
  const newState=this.props.objstate.users.map((user)=>{
    const tempuser=user;
      if(userDy.name===tempuser.name){
        if(! (isNaN(e.target.value))){
      tempuser.assist=e.target.value;
        }
    }
      return tempuser;
    });
  this.setCurrentState(newState);
}   

makeGoal=(id)=>{
  const newState=JSON.parse(JSON.stringify(this.props.objstate));

  var val=parseInt(newState.users[id].goals);
      if(isNaN(val)){
        val=0;
      }
      newState.users[id].goals=val+1;

this.setCurrentState(newState.users);
}

makeAssist=(userDy)=>{
  const newState=this.props.objstate.users.map((user)=>{
    const tempUser=user;
    if(userDy.name===tempUser.name){
      var val=parseInt(tempUser.assist);
      if(isNaN(val)){
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
  <div className="container player-parent">
  <h1 className="heading-parent">{this.props.objstate.title}</h1>
  <table>
    <tbody>
  {
    this.props.objstate.users.map((user,index)=>{
      return (<User key={user.id} parentAssistText={this.changeAssistText} parentGoalsText={this.changeGoalsText} parentMethodAssist={this.makeAssist} parentMethodGoal={this.makeGoal.bind(this,user.id)} obj={user} goals={user.goals} assist={user.assist}>{user.name}</User>
      )
    })

  }
  </tbody>
  </table>
  </div>
)

}

}

export default Users;
