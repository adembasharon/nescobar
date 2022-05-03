import react from "react"
import Image from "next/image"
import logo from "../public/images/LogoBar.png"
import twitter from "../public/images/Vectortw.svg"
import insta from "../public/images/Vectorin.svg"
import fb from "../public/images/Vectorfb.svg"
import styles from "../styles/Home.module.css"
import Link from "next/link"

const Nav=()=>{
return(
    <>
{/*  Main Nav */}

    <div className={styles.navContainer}>
    <div className={styles.navLogo}>
        <Link href="/">
<Image src={logo} width={70} height={70}/>
</Link>
</div>


<div className={styles.NavIcons}>
    <div>
        
    <p>Find Me On:</p>
    </div>
    <div>
    <Link href="https://twitter.com/nesco_nesco28">
        <a target="_blank"><Image src={twitter} width={22} height={20}/>
</a>
</Link>
</div>
<div>
    
<Link href="https://instagram.com/nesco_nesco">
<a target="_blank"><Image src={insta} width={22} height={20}/>
</a>
</Link>
</div>
<div>
    <Link href="https://web.facebook.com/rolynesco.otienoz">
        <a target="_blank"><Image src={fb} width={22} height={20}/>
</a>
</Link>
</div>
</div>


<div className={styles.navLinks}>
    <div><Link href="/booking">
        <a target="_blank"><p>Booking</p></a>
    </Link>
    </div>
    <div>
         <Link href="/About"> 
        <a target="_blank"><p>Who's Nesco</p></a>
         </Link> 
    </div>
</div>
</div>


 {/* sub-Nav */}
<div className={styles.subNav}>
<div >
    <p >
        <Link href="/Dj">
        DJ Nesco
        </Link>
        </p>
</div>
<div>
    <p>
        <Link href="/Supermodel">
        Supermodel
        </Link>
        </p>
</div>
<div>
    <p>
        <Link href="/Blog">
        Blog
        </Link>
        </p>
</div>

</div>

</>
)}

export default Nav



