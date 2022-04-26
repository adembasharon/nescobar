import React ,{useState , useEffect} from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import Link from "next/link";

const singleProduct=()=>{
    const [singlePost , setSinglePost]=useState([])
const url = 'https://thawing-headland-59245.herokuapp.com/api/post/find/'
useEffect(() => {
    axios.get(url)
        .then((res) => {
            setSinglePost(res.data)
        })

}, [url])
console.log(singlePost)

return(
    <div>


{singlePost.map(item => (
                   
                   <div className={styles.blogContent} key={item.id}>
                       <div className={styles.imgContainer}>
                           <img src={item.postImage} />
                       </div>
                       <h2>{item.postTitle}</h2>
                       <p>{item.postSubtitle}</p>
                       <p>{item.postDescripton}</p>
                   </div>

               ))}


           </div>
    
)


}



export default singleProduct


