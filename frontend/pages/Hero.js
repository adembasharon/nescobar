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
import homeOne from "../public/images/blog5.jpg"
import homeTwo from "../public/images/blog4.jpg"
import homeThree from "../public/images/blog3.jpg"
import blackShirt from "../public/images/black.jpeg"

import whiteShirt from "../public/images/whiteShirt.jpeg"



const Hero = () => {
  const settings = {
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
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

            <Image src={dj1} width={350} height={350} objectFit="cover" />
            <h2>DJ Nesco</h2>
          </div>

          <div>
            <Image src={blog1} width={350} height={350} objectFit="cover" />
            <h2>Blog</h2>
          </div>
          <div>
            <Image src={super1} width={350} height={350} objectFit="cover" objectPosition="top left" />
            <h2>Supermodel</h2>
          </div>


          <div>
            <Image src={dj2} width={350} height={350} objectFit="cover" />
            <h2>DJ Nesco</h2>
          </div>
          <div>
            <Image src={blog2} width={350} height={350} objectFit="cover" />
            <h2>Blog</h2>
          </div>
          <div>
            <Image src={super2} width={350} height={350} objectFit="cover" />
            <h2>Supermodel</h2>
          </div>


          <div>
            <Image src={dj3} width={350} height={350} objectFit="cover" />
            <h2>DJ Nesco</h2>
          </div>
          <div>
            <Image src={blog3} width={350} height={350} objectFit="cover" />
            <h2>Blog</h2>
          </div>
          <div>
            <Image src={super3} width={350} height={350} objectFit="cover" />
            <h2>Supermodel</h2>
          </div>


        </Slider>
      </div>
      <h1 style={{ textAlign: "center", marginTop: "1em", marginBottom: "1em" }}>Get Your Merchandise Today Available in all sizes</h1>
      <div className="OrderName">


        <div>
        <Image src={blackShirt} width={350} height={350} />
        <p>NescoBar Tshirt(Black)</p>
        <p style={{ color: "green" }}>Ksh.2000</p>
        <button style={{borderRadius:"3px"}} data-bs-toggle="modal" data-bs-target="#staticBackdrop" width={30}>
          Order
        </button>
        </div>
<div>
        <Image src={whiteShirt} width={350} height={350} />
        <p>NescoBar Tshirt(White)</p>
        <p style={{ color: "green" }}>Ksh.2000</p>
        <button style={{borderRadius:"3px"}} data-bs-toggle="modal" data-bs-target="#staticBackdrop" width={30}>
          Order
        </button>
        </div>

        <div>
          <Image src={blackShirt} width={350} height={350} />
          <p>NescoBar Tshirt(Black)</p>
          <p style={{ color: "green" }}>Ksh.2000</p>
          <button style={{borderRadius:"3px"}} type="button" className="" data-bs-toggle="modal" data-bs-target="#staticBackdrop" width={30}>
            Order
          </button>

          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">Kindly Note that we accept cash on delivery</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <input type="text" placeholder="Your name" />
                </div>
                <div className="modal-body">
                  <input type="text" placeholder="Location" />
                </div>

                <div className="modal-body">
                  <input type="text" placeholder="Phone Number" />
                </div>

                <div className="modal-body" >
                  <div className={styles.modalItem}>
                    <div>
                      <h5>Item</h5>
                    </div>
                    <div>
                      <h5>Quantity</h5>
                    </div>
                    <div>
                      <h5>Size</h5>
                    </div>
                    <div>
                      <h5>Color</h5>
                    </div>
                    <div>
                      <h5>Price</h5>
                    </div>

                  </div>
                  <div style={{ display: "flex", flexDirection: "flex-end" }}>
                    <button>Add Item</button>
                  </div>
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-primary">Order</button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>


      <div className={styles.heroBlogPost}>
        <h1>Latest blog posts</h1>
        <div className="heroblog">
          {/* {
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
        } */}

          <div className="homepageBlogContainer">
            <div>
              <div>
                <Image src={homeOne} width={350} height={350} />
              </div>
              <div>
                <h2>Waste at slum  </h2>
              </div>
              <div>
                <p>It's only in Kibra where you find creative and innovative minds....</p>
              </div>
              <div>
                <Link href="/blog1">
                  <button>Continue reading</button>
                </Link>

              </div>
            </div>


            <div>
              <div>
                <Image src={homeTwo} width={350} height={350} />
              </div>
              <div>
                <h2>Young super talent </h2>
              </div>
              <div>
                <p>He goes by the name Red Pro Fate but some people call him Dimore...</p>
              </div>
              <div>
                <Link href="/blog2">
                  <button>Continue reading</button>
                </Link>
              </div>
            </div>



            <div>
              <div>
                <Image src={homeThree} width={350} height={350} />
              </div>
              <div>
                <h2>Mentor Adera Betty </h2>
              </div>
              <div>
                <p>Adera betty is one of the most loved women in the society...</p>
              </div>
              <div>
                <Link href="/blog3">
                  <button>Continue reading</button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Hero