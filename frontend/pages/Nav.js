import react from "react"
import Image from "next/image"
import logo from "../public/images/bglo.png"
import twitter from "../public/images/Vectortw.svg"
import insta from "../public/images/Vectorin.svg"
import fb from "../public/images/Vectorfb.svg"
import suite from "../public/images/suite.svg"
import author from "../public/images/author.svg"
import party from "../public/images/party.svg"
import menu from "../public/images/menu.svg"

import styles from "../styles/Home.module.css"
import Link from "next/link"

const Nav = () => {
    return (
        <>
            {/*  Main Nav */}
            <div className={styles.subNavContainer}>

                <div className={styles.navContainer}>
                    <div className={styles.navLogo}>
                        <Link href="/">
                            <Image src={logo} width={84} height={84} />
                        </Link>
                    </div>


                    <div className={styles.NavIcons}>
                        <div style={{color:"white"}}>
                            Find Me On:
                            {/* <p>Find Me On:</p> */}
                        </div>
                        <div>
                            <Link href="https://twitter.com/nesco_nesco28">
                                <a target="_blank"><Image src={twitter} width={22} height={20} />
                                </a>
                            </Link>
                        </div>
                        <div>

                            <Link href="https://instagram.com/nesco_nesco">
                                <a target="_blank"><Image src={insta} width={22} height={20} />
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link href="https://web.facebook.com/rolynesco.otienoz">
                                <a target="_blank"><Image src={fb} width={22} height={20} />
                                </a>
                            </Link>
                        </div>
                    </div>

<div className={styles.menubar}>
<Image src={menu} width={22} height={20}/>
</div>
<div className={styles.menuItems}>
    <select>
        <option>Blog</option>
         <option>Dj</option>
        <option>Supermodel</option>
<option>Who's Nesco</option>
    <option>Booking</option>
    </select>
</div>


                    <div className={styles.navLinks}>
                        <div style={{color:"white"}}><Link href="/booking">
                            <a target="_blank">Booking</a>
                        </Link>
                        </div>
                        <div style={{color:"white"}}>
                            <Link href="/About">
                            <a target="_blank">
                               Who's Nesco
                               </a>
                            </Link>
                        </div>
                    </div>
                </div>


                {/* sub-Nav */}
                <div className={styles.subNav}>
                    <div >
                        <Link href="/Dj">
                            <button style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                <Image src={party} width={35} height={35} className="home-icon" />
                                Dj Nesco
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link href="/Supermodel">
                            <button style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                <Image src={suite} width={35} height={35} className="home-icon" />

                                Supermodel
                            </button>
                        </Link>
                    </div>

                    <div>
                        <Link href="/Blog">
                            <button style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                <Image src={author} width={35} height={35} className="home-icon" />

                                Blog
                            </button>
                        </Link>
                    </div>


                </div>
            </div>

        </>
    )
}

export default Nav



