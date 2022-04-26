import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import dj from "../public/images/djslide.svg"
import blog from "../public/images/blogslider.svg"
import model from "../public/images/sliderSupermodel.svg"


const Main = () => {
  return (
    <div className={styles.mainContainer}>

 {/* <iframe className={styles.video}   muted
          autoPlay="autoplay"
          preLoad="auto"
          loop 
          preload="none" 
          allowFullScreen 
          frameBorder="0" 
          src="https://res.cloudinary.com/dkpvcnel8/video/upload/v1650866194/backvideo_jj29cf.mp4"></iframe>  */}

      
      {/* <iframe className={styles.video} src="https://www.youtube.com/embed/mx04Cvrdico?controls=0&showinfo=0&rel=0&autoplay=1&loop=1" type="video/mp4"></iframe> */}
<video className={styles.video}   loop autoPlay>
  <source src="https://res.cloudinary.com/dkpvcnel8/video/upload/v1650866194/backvideo_jj29cf.mp4"/>
</video>


       <div id="carouselExampleSlidesOnly" className="carousel slide sliddinImages" data-bs-ride="carousel">
        <div className="carousel-inner carousel-innerOne">
          <div className="carousel-item carousel-itemOne active">
            <Image src={blog} />
          </div>
          <div className="carousel-item carousel-itemOne">
            <Image src={dj} />
          </div>
          <div className="carousel-item carousel-itemOne">
            <Image src={model} />
          </div>
        </div>
      </div> 



    </div>
  )




}
export default Main





