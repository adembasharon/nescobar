import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import styles from "../styles/Home.module.css";
import axios from 'axios';
import Link from "next/link";


export default function Blog() {
        const [details, setDetails] = useState([])
    const url = 'https://thawing-headland-59245.herokuapp.com/api/post/'

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setDetails(res.data)
            })

    }, [url])

    console.log(details)

   
    return (
        <div>
            <Nav />
            <div className={styles.background}>
            </div>
            <h1 style={{ textAlign: "center", margin: "1em 0" }}>Blog Posts</h1>

            <div className={styles.blogItems}>

                {details.map(item => (
                   
                    <div className={styles.blogContent} key={item.id}>
                        <div className={styles.imgContainer}>
                            <img src={item.postImage} />
                        </div>
                        <h2>{item.postTitle}</h2>
                        <p>{item.postSubtitle}</p>
                        
                        <Link href={`${item._id}`}><button>Continue reading</button></Link>
                
                    </div>

                ))}


            </div>






            <Footer />
        </div>
    )
}
