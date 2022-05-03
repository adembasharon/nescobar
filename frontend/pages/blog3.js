import React from "react"
import Image from "next/image"
import blog from "../public/images/blog3.jpg"
const blog3=()=>{
return(
    <div class="blogID">
        <div>
        <Image src={blog} width={250} height={250}/>
        </div>
        <div>
        <h2>Mentor Adera Betty</h2>
        </div>
        <div>
        <p>Adera betty is one of the most loved women in the society, he provides mentorship for youth especially girls.Many men and women have made extraordinary achievements through Mr Betty one of them being Edelqueen Shion the author of the book called 'Girl witha thorn' get to read the book and know what it entails</p>
        </div>
    </div>
)
}
export default blog3