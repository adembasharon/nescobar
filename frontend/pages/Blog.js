import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import styles from "../styles/Home.module.css";
import axios from 'axios';
import Link from "next/link";


export default function Blog() {
        const [details, setDetails] = useState([])
        // https://bcc5-102-6-65-141.ngrok.io/api/post/
    const url = ' http://localhost:5000/api/post/'

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setDetails(res.data)
            })
            .catch(err=>{
                console.log(err)
            })

    }, [url])

    console.log(details)

   
    return (
        <div style={{fontFamily: 'Concert One'}}>
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
