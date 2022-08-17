import React, { useState, useEffect, useContext } from "react"
import styles from "../../styles/Home.module.css";
import Link from "next/link"
import AppContext from "../../public/images/src/state"
import axios from "axios";
import { useRouter } from "next/router";


const dashbord = () => {
    const { userState, postsState } = useContext(AppContext)
    const [currentUser, setCurrentUser] = userState
    const [posts, setPosts] = postsState

    const [profile, setProfile] = useState()
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState()
    const [user, setUser] = useState([])
    const [formInput, setFormInput] = useState({
        postImage: "",
        postTitle: "",
        postSubtitle: "",
        postDescription: "",
        postCartegory: ""
    })


    const router = useRouter();
    useEffect(() => {

        const user = localStorage.getItem("loggedInUser")

        setCurrentUser(JSON.parse(user))

        if (JSON.parse(user)[0].isAdmin) {
            router.push("/admin/dashbord")
        } else {
            router.push("/admin/login")
        }

    }, [])


    const url = 'http://localhost:5000/api/post/'
    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = () => axios.get(url)
        .then((res) => {
            setPosts(res.data)
        })
        .catch((err) => {
            console.log(err)
        })

    useEffect(() => {
        localStorage.setItem("posts", JSON.stringify(posts))
    }, [posts])


    const detail = async (id) => {
        const data = JSON.parse(localStorage.getItem("posts"));
        const dataId = data.indexOf(data.find(item => item._id === id))
        data.splice(dataId, 1);
        setPosts([...data]);
        localStorage.setItem("posts", JSON.stringify(posts))

        const deletedItem = await fetch(`http://localhost:5000/api/post/${id}`, {
            method: "DELETE",
            headers: {
                "token": `Bearer ${currentUser[0].accessToken}`
            }
        })
        console.log(await deletedItem.json())
        console.log(currentUser[0].accessToken)

    }

    const edit = () => {
        localStorage.setItem("posts", JSON.stringify(posts))
        posts = JSON.parse(localStorage.getItem("posts"))

    }
    const logout = () => {
        localStorage.removeItem("user", JSON.stringify(user))
        setUser(false)
    }

    return (

        <div className={styles.carousel}>
            <div className={styles.btn}>

                <div>
                </div>
                <div>
                    <Link href="/admin/addPost">
                        <button>Add a new post</button>
                    </Link>
                </div>
                <div>
                    <Link href="/admin/login">
                        <button onClick={logout}>Logout</button>
                    </Link>
                </div>

            </div>

            {/* DISPLAYED POST */}
            <div className={styles.blog_Items}>
            <div className={styles.blogItems}>

                {posts.map(item => (

                    <div className={styles.blogContent} key={item.id}>
                        <div className={styles.imgContainer}>
                            <img src={item.postImage} />
                        </div>
                        <h2>{item.postTitle}</h2>
                        <p>{item.postSubtitle}</p>
                        <div dangerouslySetInnerHTML={{ __html: item.postDescription }}></div>
                        <p>{item.cartegory}</p>
                        <div style={{display:"flex",gap:3,alignItems:"center"}}>
                        <div>
                            <button style={{backgroundColor:"red"}} type="submit" onClick={(e) => detail(item._id)} disabled={loading ? true : false}>{loading ? "Deleting" : "Delete"}</button>
                        </div>
                        <div>
                            <Link href={`editpost/${item.postTitle}`}>
                                <button onClick={edit}>Edit Post</button>
                            </Link>
                        </div>
                    </div>
                    </div>
                )
                )
                }


            </div>
            </div>
        </div >
    )
}

export default dashbord











