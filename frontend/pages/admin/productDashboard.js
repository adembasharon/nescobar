import React, { useState, useEffect, useContext } from "react"
import styles from "../../styles/Home.module.css";
import Link from "next/link"
import AppContext from "../../public/images/src/state"
import axios from "axios";
import { useRouter } from "next/router";


const dashbord = () => {
    const { userState, productState } = useContext(AppContext)
    const [currentUser, setCurrentUser] = userState
    const [product, setProduct] = productState

    const [profile, setProfile] = useState()
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState()
    const [user, setUser] = useState([])
    const [formInput, setFormInput] = useState({
        productImage: "",
        productColor: "",
        productSize: "",
        productQuantity: "",
        productName: "",
        productPrice: ""
    })
    const router = useRouter();
    useEffect(() => {
        const user = localStorage.getItem("loggedInUser")
        setCurrentUser(JSON.parse(user))
        if (JSON.parse(user)[0].isAdmin) {
            router.push("/admin/productDashboard")
        } else {
            router.push("/admin/login")
        }

    }, [])
    const url = 'http://localhost:5000/api/product/'
    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = () => axios.get(url)
        .then((res) => {
            setProduct(res.data)
        })
        .catch((err) => {
            console.log(err)
        })

    useEffect(() => {
        localStorage.setItem("product", JSON.stringify(product))
    }, [product])


    const detail = async (id) => {
        const data = JSON.parse(localStorage.getItem("product"));
        const dataId = data.indexOf(data.find(item => item._id === id))
        data.splice(dataId, 1);
        setProduct([...data]);
        localStorage.setItem("product", JSON.stringify(product))

        const deletedItem = await fetch(`http://localhost:5000/api/product/${id}`, {
            method: "DELETE",
            headers: {
                "token": `Bearer ${currentUser[0].accessToken}`
            }
        })
        console.log(await deletedItem.json())
        console.log(currentUser[0].accessToken)

    }
    const logout = () => {
        localStorage.removeItem("user", JSON.stringify(user))
        setUser(false)
    }

    return (

        <div className={styles.carousel}>
            <div className={styles.btn}>

                <div>
                </div>
                <div>
                    <Link href="/admin/addProduct">
                        <button>Add a new Product</button>
                    </Link>
                </div>
                <div>
                    <Link href="/admin/login">
                        <button onClick={logout}>Logout</button>
                    </Link>
                </div>

            </div>

            {/* DISPLAYED PRODUCT */}
            <div className={styles.blog_Items}>
            <div className={styles.blogItems}>
                {product.map(item => (
                    <div className={styles.blogContent} key={item.id}>
                        <div className={styles.imgContainer}>
                            <img src={item.productImage} width={80} height={80} />
                        </div>
                        <div>
                        <h2>{item.productSize}</h2>
                        </div>
                        <div>
                        <p>{item.productPrice}</p>   
                        </div> 
                        <div>
                        <p>{item.productColor}</p>      
                        </div>
                        <div>                 
                        <p>{item.productName}</p>                       
                        </div>
             
                        <div style={{display:"flex",gap:3,alignItems:"center"}}>
                        <div>
                            <button style={{backgroundColor:"red"}} type="submit" onClick={(e) => detail(item._id)} disabled={loading ? true : false}>{loading ? "Deleting" : "Delete"}</button>
                        </div>
                       
                    </div>
                    </div>
                )
                )
                }


            </div>
        </div >
        </div>
    )
}

export default dashbord











