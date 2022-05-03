import React, { useState, useEffect } from "react"
import styles from "../../styles/Home.module.css";
import axios from "axios";
import Link from "next/link"
import { useRouter } from 'next/router';
// import router from "../../../backend/routes/auth";



const dashbord = () => {
    const [profile, setProfile] = useState()
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState()
    const [formInput, setFormInput] = useState({
        postImage: "",
        postTitle: "",
        postSubtitle: "",
        postDescription: "",
        postCartegory: ""
    })
    const router = useRouter()
       const [details, setDetails] = useState([])
    const url = 'https://thawing-headland-59245.herokuapp.com/api/post/'

    useEffect(() => {
        getPosts()
    }, [])

    const deletePost = async (id) => {
        axios.delete("https://thawing-headland-59245.herokuapp.com/api/post/" + id)
        getPosts()
    }

    const getPosts = () => axios.get(url)
        .then((res) => {
            setDetails(res.data)
        })

    // console.log(details)

    const uploadImage = async (e) => {
        const files = e.target.files
        const data = new FormData()
        console.log(files)

        for (let file of files) {
            data.append("file", file)
            data.append("upload_preset", "nesco_uploads")
        }

        try {
            await fetch(" https://api.cloudinary.com/v1_1/dkpvcnel8/image/upload", {
                method: "POST",
                body: data,
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    console.log(data.secure_url)
                    return setFormInput({
                        ...formInput, postImage: data.secure_url
                    })
                })
        }
        catch (err) {
            console.log(err)
        }
    }

    const submitForm = async (e) => {
        e.preventDefault()
        const url = "https://thawing-headland-59245.herokuapp.com/api/post/new"
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formInput)
        };

        return fetch(url, options)
            .then((res) => res.json())
            .then((data) => {
                if (data.code === 11000) {
                    console.log("prodect added sucessfully")
                }
                else {
                    console.log(data)
                    return data
                }
            })
    }

    // const logout=function(req,res,next){
    //     req.session.loggedIn=false;
    //     res.redirect('/dashbord/login');
    //   };
  

    return (

        <div className={styles.carousel}>
<div className={styles.btn}>
    <div>
            <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add new post
            </button>
            </div>
            <div>
                <p>{router.query.name}</p>
            </div>
            <div>
            <button >Logout</button>
            </div>
            </div>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5>New post</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <form>
                                <div className={styles.formdetails}>
                                    <div>
                                        <input type="file" onChange={(e) => uploadImage(e)} />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="title" onChange={e => setFormInput({ ...formInput, postTitle: e.target.value })} />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Subtitle" onChange={e => setFormInput({ ...formInput, postSubtitle: e.target.value })} />
                                    </div>
                                    <div>
                                        <textarea onChange={e => setFormInput({ ...formInput, postDescription: e.target.value })}></textarea>
                                    </div>
                                    <select onChange={e => setFormInput({ ...formInput, postCartegory: e.target.value })}>
                                        <option>Homepage</option>
                                        <option>BlogPost</option>
                                    </select>
                                                                        
                                </div>
                            </form>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" onClick={submitForm} disabled={loading ? true : false} className="btn btn-primary">{loading ? "Adding" : "Add"}</button>
                        </div>
                    </div>
                </div>
            </div>

            
            {/* DISPLAYED POST */}
            <div className={styles.blogItems}>

                {details.map(item => (

                    <div className={styles.blogContent} key={item.id}>
                        <div className={styles.imgContainer}>
                            <img src={item.postImage} />
                        </div>
                        <h2>{item.postTitle}</h2>
                        <p>{item.postSubtitle}</p>
                        <p>{item.postDescription}</p>
                        <p>{item.cartegory}</p>
                        <button type="submit" onClick={() => deletePost(item._id)} disabled={loading ? true : false}>{loading ? "Deleting" : "Delete"}</button>
                        <button >Edit Post</button>


                    </div>

                ))}


            </div>
        </div >
    )
}

export default dashbord











