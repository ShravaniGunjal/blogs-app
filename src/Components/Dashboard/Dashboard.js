import { use } from "react";
import "./Dashboard.css"
import { useNavigate } from "react-router-dom";
function Dashboard() {
    const navigate=useNavigate();
    const navigateToLogin=()=>{
        navigate("/login")
    }
    const navigateToRegister=()=>{
        navigate("/register")
    }
    return (
        <div className="background">
            <div className="header">
                <div>Blogs</div>
                <div className="headerRightSection">
                    <span>Login</span>
                    <span>Register</span>
                </div>
            </div>
            <div>
                <div className="blogsBox">
                    <div className="blogs">Blogs!</div>
                    <div className="blogsDes">Publish your passions, your way ...</div>
                    <div className="footerButtons">
                    <button className="button" onClick={navigateToLogin}>Login</button>
                    <button className="button" onClick={navigateToRegister}>Register</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Dashboard;