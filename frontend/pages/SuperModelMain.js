import React from "react";
import styles from "../styles/Home.module.css";
import nescoImage from "../public/images/supermodel.png"
import Image from "next/image";
import video from "../public/images/video.svg";
import super1 from "../public/images/newmodel.jpg";
import super2 from "../public/images/newmodel2.jpg";
import super3 from "../public/images/magosomodel.jpg";
import Link from "next/link";


const SuperModelMain=()=>{
    return(
        <div>
            <div className={styles.container}>
<div className={styles.superContent}>
    <div className={styles.textImg}>
<Image src={nescoImage}/>
</div>
<div className={styles.text}>
<p>Nesco discovered his modelling 

talent in january 2022 when he was 

modelling for for shift80 cloth 

company, He got alot of inspiration 

and mentorship from the company

this encouraged him until today 

he is concidered as a super model.
</p>
<Link href="/booking">
<button>Book Me</button>
</Link>
<h3>Watch Nesco in action</h3>

<Image src={video} width={30} height={30}/>

</div>
</div>
</div>



<div className={styles.superImages}>
<div className={styles.singleimg}>
    <Image src={super1}  width={300} height={300} objectFit="cover"/>
</div>
<div className={styles.singleimg}>
    <Image src={super2} width={300} height={300} objectFit="cover"/>
</div>
<div className={styles.singleimg}>
    <Image src={super3}  width={300} height={300} objectFit="cover" objectPosition="top left"/>
</div>

</div>


        </div>
    )
}
export default SuperModelMain