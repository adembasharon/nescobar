import React, { useState, useEffect, useContext } from "react";
import AppContext from "../public/images/src/state";
import axios from "axios";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import dj1 from "../public/images/djcarosel1.jpeg";
import dj2 from "../public/images/djcarousel2.jpeg";
import dj3 from "../public/images/djcarousel3.jpeg";
import super1 from "../public/images/magosomodel.jpg";
import super2 from "../public/images/supercarousel1.jpg";
import super3 from "../public/images/newmodel.jpg";
import blog1 from "../public/images/kenokoth.jpg";
import blog2 from "../public/images/blog2.jpg";
import blog3 from "../public/images/blog3.jpg";
import { HomepageBlog } from "./Data";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import homeOne from "../public/images/blog5.jpg";
import homeTwo from "../public/images/blog4.jpg";
import homeThree from "../public/images/blog3.jpg";
import blackShirt from "../public/images/black.jpeg";
import whiteShirt from "../public/images/whiteShirt.jpeg";

const Hero = () => {
  const settings = {
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const { userState, productState } = useContext(AppContext);
  const [currentUser, setCurrentUser] = userState;
  const [product, setProduct] = productState;
  const [currentParams, setCurrentParams] = useState({ color: "", size: "" });

  const [formInput, setFormInput] = useState({
    productImage: "",
    productColor: "",
    productSize: "",
    productQuantity: "",
    productName: "",
    productPrice: "",
    location: "",
    phoneNumber: "",
    clientName: "",
  });

  console.log(product);

  const url = " http://localhost:5000/api/product/";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  console.log(product);

  const orderParameters = (param) => {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetch("http://localhost:5000/api/booking", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formInput),
    });
    await data.json().catch((error) => {
      console.log(error);
    });
    console.log(formInput);
  };

  return (
    <div>
      <div className={styles.mainDes}>
        <ul>
          <li>
            <Link href="/Dj">DJ .</Link>
          </li>
          <li>
            <Link href="/Supermodel">Supermodel.</Link>
          </li>
          <li>
            <Link href="/Blog">Blogger</Link>
          </li>
        </ul>

        <p>
          Nesco is a young talent boy from kibra , Nairobi with alot of
          ambitions. Get to know him more by following him on different social
          media platforms. Book him for ceremonies or hire him as a model, Get
          to know what is happening in your environment mainly through Nesco's
          blog.
        </p>
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
            <Image
              src={super1}
              width={350}
              height={350}
              objectFit="cover"
              objectPosition="top left"
            />
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
      <h1
        style={{ textAlign: "center", marginTop: "1em", marginBottom: "1em" }}
      >
        Get Your Merchandise Today Available in all sizes
      </h1>
<div className={styles.heroBg}>
      <div className={styles.OrderName}>
        <div className={styles.productSingle_Item}>
          {product.map((item) => (
            <div>
              <div className={styles.productItem_container} key={item.id}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <img src={item.productImage} width={350} height={350} />

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "1em",
                      alignItem: "center",
                    }}
                  >
                    <div>
                      <p>{item.productName}</p>
                      <p>
                        Size:
                        <span style={{ color: "green" }}>
                          {item.productSize}
                        </span>
                      </p>
                    </div>
                    <div>
                      <p>
                        Price:{" "}
                        <span style={{ color: "green" }}>
                          Ksh.{item.productPrice}{" "}
                        </span>
                      </p>
                      <p>
                        Colour:{" "}
                        <span style={{ color: "green" }}>
                          {item.productColor}
                        </span>
                      </p>
                    </div>
                  </div>

                  <button
                    style={{ borderRadius: "3px" }}
                    onClick={() =>
                      setCurrentParams({
                        size: item.productSize,
                        color: item.productColor,
                      })
                    }
                    type="button"
                    className=""
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    width={30}
                  >
                    Order
                  </button>
                </div>
                <div
                  className="modal fade movingCarousel"
                  id="staticBackdrop"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabIndex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">
                          Kindly Note that we accept cash on delivery
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <input
                          onChange={(e) =>
                            setFormInput({
                              ...formInput,
                              clientName: e.target.value,
                            })
                          }
                          type="text"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="modal-body">
                        <input
                          onChange={(e) =>
                            setFormInput({
                              ...formInput,
                              location: e.target.value,
                            })
                          }
                          type="text"
                          placeholder="Location"
                        />
                      </div>

                      <div className="modal-body">
                        <input
                          type="number"
                          onChange={(e) =>
                            setFormInput({
                              ...formInput,
                              phoneNumber: e.target.value,
                            })
                          }
                          placeholder="Phone Number"
                        />
                      </div>

                      <div className="modal-body">
                        <div className={styles.modalItem}>
                          <div>
                            <h5>Item</h5>
                            <p style={{ color: "green" }}>{item.productName}</p>
                          </div>
                          <div>
                            <h5>Quantity</h5>
                            <input type="number" placeholder={item.quantity} value={1}/>
                          </div>
                          <div>
                            <h5>Size</h5>

                            <select
                              style={{ color: "green" }}
                              value={currentParams.size}
                            >
                              <option>Small</option>
                              <option>Large</option>
                              <option>X-Large</option>
                              <option>XX-Large</option>
                              <option>X-Small</option>
                              <option>xx-Small</option>
                            </select>
                          </div>
                          <div>
                            <h5>Color</h5>

                            <select
                              name="choice"
                              style={{ color: "green" }}
                              value={currentParams.color}
                            >
                              <option>Red</option>
                              <option>Green</option>
                              <option>Yellow</option>
                              <option>Pink</option>
                              <option>Black</option>
                              <option>White</option>
                            </select>

                            {console.log(item.productColor)}
                            {/* <p><span style={{ color: "green" }}>{item.productColor}</span></p>   */}
                          </div>
                          <div>
                            <h5>Price</h5>
                            <p>
                              <span style={{ color: "green" }}>
                                Ksh.{item.productPrice}{" "}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "flex-end",
                          }}
                        >
                          <button>Add Item</button>
                        </div>
                      </div>

                      <div className="modal-footer">
                        <button
                          type="button"
                          onClick={handleSubmit}
                          className="btn btn-primary"
                        >
                          Order
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
                <h2>Waste at slum </h2>
              </div>
              <div>
                <p>
                  It's only in Kibra where you find creative and innovative
                  minds....
                </p>
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
                <p>
                  He goes by the name Red Pro Fate but some people call him
                  Dimore...
                </p>
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
                <p>
                  Adera betty is one of the most loved women in the society...
                </p>
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
    </div>
  );
};

export default Hero;
