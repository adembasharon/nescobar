import React from "react"
import Image from "next/image";
import fb from "../public/images/facebook.svg";
import twiter from "../public/images/twitter.svg";
import copy from "../public/images/copy.svg";
import Nav from "./Nav";


export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:5000/api/post/");
    const data = await res.json()


    const paths = data.map(item => {
        return {
            params: { id: item._id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }

}


export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch("http://localhost:5000/api/post/find/" + id)
    const data = await res.json()

    return {
        props: { item: data }
    }


}


const postId = ({ item }) => {
    console.log(item)

    return (
        <>
        <Nav/>
        <div className="single-post">
            <div className="singlePost">
                <div style={{display:"flex",gap:"4em"}}>
                    <div>
                    <img src={item.postImage} width={700} height={560} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div>
                            <h3>Share</h3>
                        </div>
                        <div>
                            <Image src={fb} width="27" height="27" style={{cursor:"pointer"}}/>
                        </div>
                        <div>
                            <Image src={twiter} width="27" height="27" style={{cursor:"pointer"}}/>
                        </div>
                        <div>
                            <Image src={copy} width="27" height="27" style={{cursor:"pointer"}}/>
                        </div>
                    </div>
                </div>
                <h2>{item.postTitle}</h2>
                <p style={{ width: "60%" }}>{item.postDescription}</p>
            </div>

            <div >



            </div>
        </div>
        </>
    )
}

export default postId;