import React from "react";

export const Login = () => {
  return <div class="form_box">
  <h1><strong>Log In</strong></h1>
  <input id="input_box" placeholder="Enter your Mobile Number"/><br></br><br></br>
  <input id="input_box" placeholder="Enter your Email Address" /><br></br><br></br>
  <input type="password" placeholder="*******" id="password" name="password" /><br></br><br></br>
  <button onclick="addTodo()"> <a href="/Home"><b>Log In</b> </a></button> &nbsp; &nbsp;
  <button onclick="addTodo()" > <a href="/Home">Login As Guest User</a></button>

</div>

};
