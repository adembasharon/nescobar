import React from "react"
import Image from "next/image"
import blog from "../public/images/blog5.jpg"
const blog1=()=>{
return(
    <div class="blogID">
        <div>
        <Image src={blog} width={250} height={250}/>
        </div>
        <div>
        <h2>Waste at slum</h2>
        </div>
        <div>
        {/* <p>It's only in Kibra where you find creative and innovative minds....</p> */}
        </div>
        <div>
        <p>It's only in Kibra where you find creative and innovative minds. This young boy observed the waste in kibra and and came up with an idea of creating huts out of bottle. This is one of the best way to keep our environment clean. The huts that he creates out of bottle looks supernaturally gorgious.He threfore recomend that people should do everything possible to keep the environment clean.Big up to this young boy.</p>
        </div>
    </div>
)
}
export default blog1