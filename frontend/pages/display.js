import React, { useState, useEffect } from "react";
// import Footer from "./Footer";
// import Nav from "./Nav";
import styles from "../styles/Home.module.css";
import axios from 'axios';
import Link from "next/link";


export default function Dispalay() {
    // const [formInput, setFormInput] = useState({
    //     postImage: "",
    //     postTitle: "",
    //     postSubtitle: "",
    //     postDescription: "",
    //     postCartegory:""
    // })

        const [details, setDetails] = useState([])
    const url = 'https://thawing-headland-59245.herokuapp.com/api/post/'

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setDetails(res.data)
            })

    }, [url])

    console.log(details)


    const postDelete=async (e)=>{
        e.preventDefault()
        const url = "https://thawing-headland-59245.herokuapp.com/api/post/id"
        const options = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formInput)
    }
    return fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
        if (data.code === 11000) {
            console.log("prodect deleted sucessfully")
        }
        else {
            console.log(data)
            return data
        }
    })
    }
    
    return (
        <div>
            <div className={styles.blogItems}>

                {details.map(item => (
                   
                    <div className={styles.blogContent} key={item.id}>
                        <div className={styles.imgContainer}>
                            <img src={item.postImage} />
                        </div>
                        <h2>{item.postTitle}</h2>
                        <p>{item.postSubtitle}</p>
                        <p>{item.cartegory}</p>
                        <button onClick={postDelete}>Delete post</button>
                        <button >Edit Post</button>
                        
                
                    </div>

                ))}


            </div>






            {/* <Footer /> */}
        </div>
    )
}
