import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import logo from "../public/images/bglo.png"
import Image from "next/image";

const Footer = ()=>{
    return(
        <div className={styles.footerCont}>
        <div className={styles.footerContainer}>
<div className={styles.nescoP}>
    <Image src={logo} width={150} height={110}/>


{/* <p>Need to have fun with Nesco ? feel<br/>  free to reach out.He likes listening <br/>from people.</p> */}
</div>

<div>
<ul>
    <h3 >Links</h3>
    
    <li>
    <Link href="/Dj">
        DJ Nesco
        </Link>

    </li>
    <li>
        <Link href="/Supermodel">
        Supermodel
        </Link>
        </li>
    <li>
        <Link href="/Blog">
        Blog
</Link>
</li>
</ul>
</div>

<div>
    <ul>
        <h3 >Contact</h3>
        <li>+254 719 149 291</li>
        <li>lorinesotile@gmail.com</li>
        <li>Nairobi,Kenya</li>
    </ul>
</div>

        </div>
        <div className={styles.copy}>
            <p>&copy;2022 AllRights reserved || crafted with  <span>&hearts;</span><Link href="/me"> Ademba Sharon</Link></p>
        </div>
        </div>
    )
}
export default Footer