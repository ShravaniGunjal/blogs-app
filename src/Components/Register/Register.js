import { useState } from "react"
import "./Register.css"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
function Register() {
    const navigate = useNavigate()
    const navigateToDashBoard = () => {
        navigate("/")
    }
    const [userData, setuserData] = useState({ name: "", email: "", password: "" })

    function handleRegistrationData() {
        console.log(userData)
        if(!userData.name || !userData.email || !userData.password){
            alert("Please enter valid details");
        return;
        }
        axios.post('http://localhost:3001/user', userData)
           .then(()=>{
         navigate("/login")
            })
        }
    function handleName(event) {
        let user = { ...userData }
        user["name"] = event.target.value
        setuserData(user)
    }
    function handleEmail(event) {
        let user = { ...userData }
        user["email"] = event.target.value
        setuserData(user)
    }
    function handlePass(event) {
        let user = { ...userData }
        user["password"] = event.target.value
        setuserData(user)
           }
    return (
        <div className="background">
            <div className="header">
                <div onClick={navigateToDashBoard}>Blogs</div>
                <div className="headerRightSection">
                    <span>Login</span>
                    <span>Register</span>
                </div>
            </div>
            <div>
                <div className="blogsLoginBox1">
                    <div className="blogs" >Blogs</div>
                    <div className="blogsDes">Publish your passions, your way ...</div>
                    <div className="login">Register</div>
                    <div className="inputText">Name</div>
                    <input type='text' placeholder="Firstname Lastname" className="textBox" value={userData.name} onChange={handleName} />
                    <div className="inputText">Email id</div>
                    <input type='text' placeholder="test@gmail.com" className="textBox" value={userData.email} onChange={handleEmail} />
                    <div className="inputText">Password</div>
                    <input type="password" placeholder="Test@123" className="textBox" value={userData.password} onChange={handlePass} />
                    <div><button className="registerButton" onClick={handleRegistrationData}>Register</button></div>
                </div>
            </div>
        </div>
    )
}
export default Register;