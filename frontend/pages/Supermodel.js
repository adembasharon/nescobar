import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import profile from "../public/images/superModel.svg"
import SuperModelMain from "./SuperModelMain";


const Supermodel = () => {
    return (
        <div style={{fontFamily: 'Oswald'}}>
            <Nav/>

            <div className={styles.superNav}>
                <div style={{fontSize:"13rem",textAlign:"center",fontWeight:"bold"}}><p className="nesco">NESCO <br />SUPERMODEL
                </p>
                </div>
                <div className={styles.superimg}>
                    <Image src={profile} width={450} height={450} />
                </div>
            </div>

            <SuperModelMain />
            <Footer />
        </div>
    )
}
export default Supermodel