import React from 'react';

const User=(props)=>{
if(props.children){
return (<tr><td>Name : {props.children}</td><td> Goals : {props.goals} </td><td>Assists: {props.assist}</td></tr>)
}else{
  return <div>Invalid Entry</div>
}
}

export default User;
