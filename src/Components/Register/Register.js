import "./Register.css"
function Register(){
    return(
        <div className="background">
        <div className="header">
        <div>Blogs</div>
        <div className="headerRightSection">
            <span>Login</span>
            <span>Register</span>
        </div>
        </div>
        <div>
            <div className="blogsLoginBox1">
                <div className="blogs">Blogs</div>
                <div className="blogsDes">Publish your passions, your way ...</div>
                <div className="login">Register</div>
                 <div className="inputText">Name</div>
                <input type='text' placeholder="Firstname Lastname" className="textBox"/>
                <div className="inputText">Email id</div>
                <input type='text' placeholder="test@gmail.com" className="textBox"/>
                <div className="inputText">Password</div>
                <input type="password" placeholder="Test@123" className="textBox"/>
                <div><button className="registerButton">Register</button></div>
            </div>
        </div>
    </div>
    )
}
export default Register;