import React from "react"
import Image from "next/image"
import blog from "../public/images/blog4.jpg"
const blog2=()=>{
return(
    <div className="blogID">
        <div>
        <Image src={blog} width={250} height={250}/>
        </div>
        <div>
        <h2>Young super talent</h2>
        </div>
        <div>
        <p>He goes by the name Red Pro Fate but some people call him Dimore , He is one of the most talented boys who focuse most in his talent more than anything else , during jokes he will joke but find him at work , He is more focused than everybody else.</p>
        </div>
    </div>
)
}
export default blog2