import React, { useRef, useState, useEffect, useContext } from "react"
import dynamic from "next/dynamic"
import "suneditor/dist/css/suneditor.min.css";
import { Editor } from '@tinymce/tinymce-react';
import Link from "next/link";
import axios from "axios";
import AppContext from "../../public/images/src/state"

const AddProduct = () => {
    const [formInput, setFormInput] = useState({
        productImage: "",
        productName: "",
        productColor: "",
        productSize: "",
        productPrice: "",
        productQuantity: ""
    })
    const { userState, productState } = useContext(AppContext)
    const [currentUser, setCurrentUser] = userState
    const [product, setProduct] = productState

    const submitForm = async (e) => {
        e.preventDefault()
        const url = " http://localhost:5000/api/product/new"
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formInput)
        };


        console.log(formInput)
        return fetch(url, options)
            .then((res) => res.json())
            .then((data) => {
                if (data.code === 11000) {
                    console.log("product added sucessfully")
                }
                else {
                    console.log(data)
                    return data
                }
            })
    }
    const uploadImage = async (e) => {
        const files = e.target.files
        const data = new FormData()
        console.log(files)

        for (let file of files) {
            data.append("file", file)
            data.append("upload_preset", "nesco_uploads")
        }

        try {
            await fetch(" https://api.cloudinary.com/v1_1/dkpvcnel8/image/upload", {
                method: "POST",
                body: data,
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    console.log(data.secure_url)
                    return setFormInput({
                        ...formInput, productImage: data.secure_url
                    })
                })
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="Product_container">
            <div className="prduct_model">
            <div className="productContainer">
                <div>
                    <input type="file" onChange={(e) => uploadImage(e)} />
                </div>

                <div>
                    <input type="text" placeholder="Name" onChange={e => setFormInput({ ...formInput, productName: e.target.value })} />
                </div>

                <div>
                    <input type="text" placeholder="color" onChange={e => setFormInput({ ...formInput, productColor: e.target.value })} />
                </div>

                <div>
                    <input type="text" placeholder="Size" onChange={e => setFormInput({ ...formInput, productSize: e.target.value })} />
                </div>

                <div>
                    <input type="text" placeholder="Price" onChange={e => setFormInput({ ...formInput, productPrice: e.target.value })} />
                </div>

                <div>
                    <input type="text" placeholder="Quantity" onChange={e => setFormInput({ ...formInput, productQuantity: e.target.value })} />
                </div>

                <div style={{ display: "flex", alignItem: "center", justifyContent: "center", gap: 4 }}>
                    <div className="button">
                        <button onClick={submitForm}>Add</button>
                    </div>
                    <div>
                        <Link href="/admin/productDashboard">
                            <button>Dashbord</button>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default AddProduct;
