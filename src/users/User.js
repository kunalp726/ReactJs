import React from 'react';

const User=(props)=>{
if(props.children){
  var divStyle = {

};
return (<tr>
  <td style={divStyle}>Name : {props.children}</td>
  <td style={divStyle}> Goals : {props.goals} </td>
  <td style={divStyle}><button className="btn btn-primary" onClick={()=>{props.parentMethodGoal(props.obj)}}>Goal Scored</button></td>
  <td style={divStyle}><button className="btn btn-primary" onClick={()=>{props.parentMethodAssist(props.obj)}}>Assist Given</button></td>
  <td style={divStyle}> Assists: {props.assist}</td>
  </tr>)
}else{
  return <div>Invalid Entry</div>
}
}

export default User;
