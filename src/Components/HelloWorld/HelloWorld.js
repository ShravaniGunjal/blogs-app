import { useNavigate } from "react-router-dom";
import "./HelloWorld.css"
import { useEffect, useState } from "react";
import axios from "axios";
function HelloWorld() {

    const [blogs, setblogs] = useState([])
    
    

    const navigate = useNavigate()
    const navigateToTitle = () => {
        navigate("/title")
    }
    const navigateToDashBoard = () => {
        navigate("/")
    }

    function handleData() {
        axios.get('http://localhost:3001/blogs')
            .then((response) => {
                setblogs(response.data.blogs || response.data);
            })
            .catch((error) => {
                console.error("Error fetching blogs:", error);
            })
    }
    useEffect(() => {
        handleData()
    }, []);

    const handleDeleteBlog = (id) => {
        axios.delete(`http://localhost:3001/blogs/${id}`)
            .then((response) => {
                console.log("Blogs Deleted Successfully:", response.data.id)
                handleData()
            })
            .catch((error) => {
                console.error("Error fetching blogs:", error);
            })

    }
    const handleLikes = (id,likes) => {
        axios.patch(`http://localhost:3001/blogs/${id}`,{likes: likes + 1} )
            .then(() => {
                handleData()
            })
            .catch(error => {
                console.error("Error updating likes:", error);
            });
    }
    const handleDisLikes = (id,dislikes) => {
        axios.patch(`http://localhost:3001/blogs/${id}`, { dislikes: dislikes + 1 })
            .then(() => {
                handleData()
            })
            .catch(error => {
                console.error("Error updating dislikes:", error);
            });
    }
    // function handleEditBlog()
    //     navigate(`/title/${blogs.id}`)
    //     }
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
                    <span>{localStorage.getItem('userName')}</span>
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

                        <div className="blogtitle" key={singleEle.id}>{singleEle.Title}</div>
                        <div><strong>Created By</strong><i className="creation"> {singleEle.Created_By}</i></div>
                        <div><strong>Created At</strong><i className="creation"> {singleEle.Created_At}</i></div>
                        <hr />
                        <div>{singleEle.Desc}</div>
                        <div className="buttons">
                            <div>
                                
                                <button className="like" onClick={() => handleLikes(singleEle.id, singleEle.likes)}><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> {singleEle.likes}</button>
                                <button className="dislike" onClick={() => handleDisLikes(singleEle.id, singleEle.dislikes)}><i class="fa fa-thumbs-o-down" aria-hidden="true"></i> {singleEle.dislikes}</button>
                            </div>
                             {singleEle.Created_By===localStorage.getItem("email")?( 
                            <div> 
                                <button className="edit" onClick={() => navigate(`/title/${singleEle.id}`)}><i class="fa fa-pencil" aria-hidden="true" ></i> Edit</button>
                                <button className="delete" onClick={() => handleDeleteBlog(singleEle.id)}><i class="fa fa-trash" aria-hidden="true" ></i> Delete</button>
                               </div>
                            ):null}
                            
                        </div>
                    </div>


                ))
                }
            </div>
        </div>
    )
}
export default HelloWorld;