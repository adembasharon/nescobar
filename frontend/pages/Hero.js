import React from "react"
import styles from "../styles/Home.module.css";
import Image from "next/image";
import dj1 from "../public/images/djcarosel1.jpeg"
import dj2 from "../public/images/djcarousel2.jpeg"
import dj3 from "../public/images/djcarousel3.jpeg"
import super1 from "../public/images/magosomodel.jpg"
import super2 from "../public/images/supercarousel1.jpg"
import super3 from "../public/images/newmodel.jpg"
import blog1 from "../public/images/kenokoth.jpg"
import blog2 from "../public/images/blog2.jpg"
import blog3 from "../public/images/blog3.jpg"
import { HomepageBlog } from "./Data";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const Hero = () => {
const settings={
  arrows:true,
  infinite:true,
  autoplay:true,
  speed:200,
  slidesToShow:3,
  slidesToScroll:1,
}



  return (
    <div>
      <div className={styles.mainDes}>
        <ul>
          <li>
            <Link href="/Dj">
            DJ . 
            </Link>
            </li>
          <li>
            <Link href="/Supermodel">
            Supermodel .
            </Link>
            </li>
          <li>
            <Link href="/Blog">
            Blogger
            </Link>
            </li>
        </ul>

        <p>Nesco is a young talent boy from kibra , Nairobi with alot of ambitions. Get to know him more by following him on different social media platforms. Book him for ceremonies or hire him as a model, Get to know what is happening in your environment mainly through Nesco's blog.</p>

      </div>


{/* CAROUSEL */}

<div className={styles.HeroCartegories}>

  <Slider {...settings}>
    
<div>
  
  <Image src={dj1}  width={350} height={350} objectFit="cover"/>
  <h2>DJ Nesco</h2>
</div>

<div>
  <Image src={blog1} width={350} height={350} objectFit="cover"/>
  <h2>Blog</h2>
</div>
<div>
  <Image src={super1} width={350} height={350} objectFit="cover" objectPosition="top left"/>
  <h2>Supermodel</h2>
</div>


<div>
  <Image src={dj2} width={350} height={350} objectFit="cover"/>
  <h2>DJ Nesco</h2>
</div>
<div>
  <Image src={blog2} width={350} height={350} objectFit="cover"/>
  <h2>Blog</h2>
</div>
<div>
  <Image src={super2} width={350} height={350} objectFit="cover"/>
  <h2>Supermodel</h2>
</div>


<div>
  <Image src={dj3} width={350} height={350} objectFit="cover"/>
  <h2>DJ Nesco</h2>
</div>
<div>
  <Image src={blog3} width={350} height={350} objectFit="cover"/>
  <h2>Blog</h2>
</div>
<div>
  <Image src={super3} width={350} height={350} objectFit="cover"/>
  <h2>Supermodel</h2>
</div>


  </Slider>
</div>













      <div className={styles.heroBlogPost}>
<h1>Latest blog posts</h1>
<div className={styles.heroblog}>
        {
          HomepageBlog.map(item => {
            return (
              <div className={styles.herosec}>
                <img src={item.image} width={250} height={250} objectFit="contain" />
                <h2>{item.title}</h2>
                <p>{item.subtitle}</p>
                <button>Continue reading</button>
              </div>

            )
          })
        }

</div>


</div>



    </div>

  )
}

export default Hero