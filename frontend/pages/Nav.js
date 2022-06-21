import react from "react"
import Image from "next/image"
import logo from "../public/images/LogoBar.png"
import twitter from "../public/images/Vectortw.svg"
import insta from "../public/images/Vectorin.svg"
import fb from "../public/images/Vectorfb.svg"
import suite from "../public/images/suite.svg"
import author from "../public/images/author.svg"
import party from "../public/images/party.svg"


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
                            <Image src={logo} width={70} height={70} />
                        </Link>
                    </div>


                    <div className={styles.NavIcons}>
                        <div>

                            <p>Find Me On:</p>
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


                    <div className={styles.navLinks}>
                        <div><Link href="/booking">
                            <a target="_blank"><p>Booking</p></a>
                        </Link>
                        </div>
                        <div>
                            <Link href="/About">
                                <p>Who's Nesco</p>
                            </Link>
                        </div>
                    </div>
                </div>


                {/* sub-Nav */}
                <div className={styles.subNav}>
                    {/* <div style={{ display: "flex", flexDirection: "row", alignItems: "center",justifyContent:"center", gap: 4 }}> */}
                        <div >
                            {/* <Image src={party} width={27} height={26}/> */}
                                <Link href="/Dj">
                                <button>
                                <Image src={party} width={27} height={26} className="home-icon"/>
                             Dj Nesco
                                    </button>
                            </Link>
                        </div>
                    {/* </div> */}
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 4 }}>
                                               <div>
                            <Link href="/Supermodel">
                                <button>
                                <Image src={suite} width={27} height={26} className="home-icon"/>

                                    Supermodel
                                    </button>
                            </Link>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 4 }}>
                        <div>
                        </div>
                        <div>
                            <Link href="/Blog">
                                <button>
                                <Image src={author} width={27} height={26} className="home-icon" />

                                    Blog
                                    </button>
                            </Link>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Nav



