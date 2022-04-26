import React, { useState } from "react";
import Image from "next/image";
import nesco from "../public/images/nesco-removedbg.png";
import styles from "../styles/Home.module.css";
import djlogo from "../public/images/LogoDJ.png";
import djslide1 from "../public/images/djslide1.jpeg";
import djslide2 from "../public/images/show.jpeg";
import djslide3 from "../public/images/djslide3.jpeg";
import Nav from "./Nav";
import Footer from "./Footer";
import Link from "next/link";


const Dj = () => {
    return (
        <div>
            <Nav />

            <div className={styles.djNav}>
                <div className={styles.djcont}>
                    <Image src={djlogo} />
                    <p>Bringing you fun at your disposal</p>
                </div>

                <div className={styles.djImg}>
                    <Image src={nesco} />
                </div>
            </div>

            <div className={styles.djforHire}>
                <h2>
                    Live Performing Dj
                </h2>
                <p>Dj Nesco perfoms in all events and different shows both indoor and outdoor events </p>
                <Link href="/booking">
                <button>Hire Me</button>
                </Link>
            </div>


            <div className={styles.djImageContainer}>
                <div className={styles.djImg}>
                    <div className={styles.img}>
                        <Image src={djslide1} width={350} height={350} objectFit="cover" />
                        <div className={styles.desimg}>
                            <p>Dj Nesco Performing with his equipments</p>
                        </div>
                    </div>
                    <div className={styles.img}>
                        <Image src={djslide2} width={350} height={350} objectFit="contain" />
                        <div className={styles.desimg}>
                            <p>Dj Nesco bringing you fun in all places </p>
                        </div>

                    </div>

                    <div className={styles.img}>
                        <Image src={djslide3} width={350} height={350} objectFit="contain" />
                        <div className={styles.desimg}>
                            <p>Happy hour wiith Dj Nesco.He is the baddest of the badest</p>
                        </div>
                    </div>
                </div>
            </div>



            <Footer />
        </div>



    )
}
export default Dj