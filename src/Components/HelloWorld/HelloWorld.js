import { useNavigate } from "react-router-dom";
import "./HelloWorld.css"
import { useEffect, useState } from "react";
import axios from "axios";
function HelloWorld() {
    
    const[blogs,setblogs]=useState([])
   
    const navigate=useNavigate()
    const navigateToTitle=()=>{
        navigate("/title")
    }
    const navigateToDashBoard=()=>{
    navigate("/")
}
useEffect(()=>{
    axios.get('http://localhost:3001/blogs')
    .then((response)=>{
        setblogs(response.data.blogs || response.data);
    })
    .catch((error)=>{
        console.error("Error fetching blogs:", error);
    })
},[]);
    // const myObject = [
    //     {
    //         Title: "Hello World",
    //         Created_By: "shravani.gunjal05@gmail.com",
    //         Created_At: "02nd Sep 2025",
    //         Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    //     }
    // ]
    return (
        <div className="backgroundForBlogs">
            <div className="header">
                <div onClick={navigateToDashBoard}>Blogs</div>
                <div className="headerRightSection">
                    <span>Shravani Gunjal</span>
                    <div><span><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i> Logout</span></div>
                </div>
            </div>
            <div className="BlogsBackground">
                <div className="blogHeader">
                <div>
                <div className="Blogs">Blogs</div>
                <div className="blogText">Publish your passions, your way ...</div>
                </div>
                <button className="createNewPost" onClick={navigateToTitle}><i class="fa fa-plus-circle" aria-hidden="true"></i> Create new Post</button>
                </div>
                {blogs.map((singleEle) => (
                    <div className="desc">
                        
                        <div className="blogtitle">{singleEle.Title}</div>
                        <div><strong>Created By</strong><i className="creation"> {singleEle.Created_By}</i></div>
                        <div><strong>Created At</strong><i className="creation"> {singleEle.Created_At}</i></div>
                        <hr/>
                        <div>{singleEle.Description}</div>
                        <div className="buttons">
                            <div>
                            <button className="like"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> Like</button>
                            <button className="dislike"><i class="fa fa-thumbs-o-down" aria-hidden="true"></i> Dislike</button>
                            </div>
                            <div>
                            <button className="edit"><i class="fa fa-pencil" aria-hidden="true"></i> Edit</button>
                            <button className="delete"><i class="fa fa-trash" aria-hidden="true"></i> Delete</button>
                            </div>
                        </div>
                    </div>


                ))
                }
            </div>
        </div>
    )
}
export default HelloWorld;