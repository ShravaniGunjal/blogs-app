import { useState } from "react";
import "./Login.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login(){
const navigate=useNavigate()
// const navigateToHelloWorld=()=>{
//         navigate("/helloworld")
//     }
const navigateToDashBoard=()=>{
    navigate("/")
}
const navigateToRegister=()=>{
        navigate("/register")
    }
const[userData,setuserData]=useState({email:"", password:""})

function handleLoginData(){
    console.log(userData)
   
    axios.get("http://localhost:3001/user", userData)

    .then((response)=>{
        
 
    
       response.data.map((singleElement)=>{
            if(singleElement.email === userData.email && singleElement.password === userData.password){
                localStorage.setItem('userName',singleElement.name)
                localStorage.setItem('email',singleElement.email)
               
           console.log("Logged In Successfully")
         navigate("/helloworld")
            }
            else{
                console.log("Invalid user");
                // alert("Invalid user")

        }
        })
    
})};
function handleEmail(event){
    let user={...userData};
    user["email"]= event.target.value
    setuserData(user)
}
function handlePass(event){
    let user={...userData};
    user["password"]= event.target.value
    setuserData(user)
}

return (
    <div className="background">
        <div className="header">
        <div onClick={navigateToDashBoard}>Blogs</div>
        <div className="headerRightSection">
            <span>Login</span>
            <span onClick={navigateToRegister}>Register</span>
        </div>
        </div>
        <div>
            <div className="blogsLoginBox">
                <div className="blogs">Blogs</div>
                <div className="blogsDes">Publish your passions, your way ...</div>
                <div className="login">Login</div>
                <div className="inputText">Email id</div>
                <input type='text' placeholder="test@gmail.com" className="textBox" name="" value={userData.email} onChange={handleEmail}/>
                <div className="inputText">Password</div>
                <input type="password" placeholder="Test@123" className="textBox" value={userData.password} onChange={handlePass}/>
                <div><button className="loginButton" onClick={handleLoginData}>Login</button></div>
            </div>
        </div>
    </div>
)
}
export default Login;