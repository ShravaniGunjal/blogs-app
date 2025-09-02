import "./Title.css"
import { useNavigate } from "react-router-dom";
function Title() {
    const navigate=useNavigate()
     const navigateToDashBoard=()=>{
    navigate("/")
}
    return (
        <div className="background">
            <div className="header">
                <div onClick={navigateToDashBoard}>Blogs</div>
                <div className="headerRightSection">
                    <span>Shravani Gunjal</span>
                    <span>Logout</span>
                </div>
            </div>
            <div className="titleBox">
                <input type="text" placeholder="Title" className="title" />
                <textarea>Description</textarea>
                <div className="Buttons">
                    <button className="button">Cancel</button>
                    <button className="button">Save</button>
                </div>
            </div>
        </div>
    )
}
export default Title;