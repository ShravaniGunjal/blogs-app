import "./Dashboard.css"
function Dashboard() {

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
                    <button className="button">Login</button>
                    <button className="button">Register</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Dashboard;