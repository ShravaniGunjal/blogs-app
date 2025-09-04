import { useState } from "react";
import "./Title.css"
import { useNavigate } from "react-router-dom";
function Title() {
    const navigate=useNavigate()
     const navigateToDashBoard=()=>{
    navigate("/")
}
const [userTitle,setuserTitle]=useState({Title:"", Desc:""})
function handleTitleData(){
    console.log(userTitle)
}
function handleTitle(event){
    let user={...userTitle}
    user["Title"]=event.target.value
    setuserTitle(user)
}
function handleDesc(event){
    let user={...userTitle}
    user["Desc"]=event.target.value
    setuserTitle(user)
}
    return (
        <div className="background">
            <div className="header">
                <div onClick={navigateToDashBoard}>Blogs</div>
                <div className="headerRightSection">
                    <span>Shravani Gunjal</span>
                    <span><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i> Logout</span>
                </div>
            </div>
            <div className="titleBox">
                <input type="text" placeholder="Title" className="title" value={userTitle.Title} onChange={handleTitle}/>
                <textarea type="text" placeholder="Description" value={userTitle.Desc} onChange={handleDesc}>Description</textarea>
                <div className="Buttons">
                    <button className="button">Cancel</button>
                    <button className="button" onClick={handleTitleData}>Save</button>
                </div>
            </div>
        </div>
    )
}
export default Title;