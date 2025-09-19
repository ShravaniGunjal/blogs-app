import { useEffect, useState } from "react";
import "./Title.css"
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
function Title() {
    const navigate=useNavigate()
    const {id}=useParams();
     const navigateToDashBoard=()=>{
    navigate("/")
}
const [userTitle,setuserTitle]=useState({Title:"", Desc:""});


// function handleTitleData(){
//     console.log(userTitle)
//     axios.post('http://localhost:3001/blogs', userTitle)
//     navigate("/helloworld")
// }
const 
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
useEffect(()=>{
    axios.get(`http://localhost:3001/blogs/${id}`)
    .then(response => {
       setuserTitle(response.data)
    })
     .catch(error => console.error("Error editing blog:", error));
},[id]);
function handleEditBlog(){
    const email=localStorage.getItem("email")
    console.log(email)
    if(!userTitle.Title ||)
    if (id) {
      
      axios.put(`http://localhost:3001/blogs/${id}`, userTitle)
    //    {
    //      ...userTitle,
    //      Created_By:email,
    //      Created_At:moment().format('YYYY-MM-DD')
      
    //     })

        .then(() => navigate("/helloworld"))
        

    } else {
   
      axios.post("http://localhost:3001/blogs", 
        {
         ...userTitle,
         Created_By:email,
         Created_At:moment().format('YYYY-MM-DD')
      
        })
        .then(() => navigate("/helloworld"))
        .catch(error => console.error("Error creating blog:", error));
    }
  };

    return (
        <div className="background">
            <div className="header">
                <div onClick={navigateToDashBoard}>Blogs</div>
                <div className="headerRightSection">
                    <span>{localStorage.getItem('userName')}</span>
                    <span><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i> Logout</span>
                </div>
            </div>
            <div className="titleBox">
                <input type="text" placeholder="Title" className="title" value={userTitle.Title} onChange={handleTitle}/>
                <textarea type="text" placeholder="Description" value={userTitle.Desc} onChange={handleDesc}></textarea>
                <div className="Buttons">
                    <button className="button">Cancel</button>
                    <button className="button" onClick={handleEditBlog}>Save</button>
                </div>
            </div>
        </div>
    )
}
export default Title;