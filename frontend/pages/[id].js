import React from "react"
import Image from "next/image";
import fb from "../public/images/facebook.svg";
import twiter from "../public/images/twitter.svg";
import copy from "../public/images/copy.svg";
import Nav from "./Nav";
// import {useRouter} from "next/route"

import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
  } from 'next-share';
  

// const router=useR
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
            <div style={{display:"flex", flexDirection:"row", justifyContent:"center",gap:"1.3em",marginTop:"1em"}} className="singlePost">
                <div style={{display:"flex",gap:"4em",flexDirection:"column"}}>
                    <div>
                    <img src={item.postImage} width={500} height={560} />
                    </div>
               
                </div>

                <div style={{display:"flex",flexDirection:"column"}}>
                <div>
                <h2>{item.postTitle}</h2>
                </div>
                {/* <p style={{ width: "60%" }}>{item.postDescription}</p> */}
                <div style={{ width: "70%" }} dangerouslySetInnerHTML={{__html: item.postDescription}}></div>

                <div style={{ display: "flex", flexDirection: "row",alignItems:"center" ,gap:"1.3em"}}>
                        <div>
                            <h3>Share To:</h3>
                        </div>
                        <div>
                            <FacebookShareButton
                            url={item._id}
                            // quote={item.id}
                            hashtag={'#nescobar'}                  
                            
                            >
                                <FacebookIcon/>

                            </FacebookShareButton>
                            {/* <Image src={fb} width="27" height="27" style={{cursor:"pointer"}}/> */}
                        </div>
                        <div>
                            <TwitterShareButton
                            url={{  id: item._id.toString() 
                            }}
                            hashtags={"#Nescobar"}
                            >

                            </TwitterShareButton>
                            {/* <Image src={twiter} width="27" height="27" style={{cursor:"pointer"}}/> */}
                        </div>
                        <div>
                            <Image src={copy} width="27" height="27" style={{cursor:"pointer"}}/>
                        </div>
                    </div>
                </div>

            </div>

            <div >



            </div>
        </div>
        </>
    )
}

export default postId;