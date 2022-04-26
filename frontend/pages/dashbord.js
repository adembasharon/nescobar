import React, { useState } from "react"
import styles from "../styles/Home.module.css";


const dashbord = () => {
    const [loading, setLoading] = useState(false);
    const [formInput, setFormInput] = useState({
        postImage: "",
        postTitle: "",
        postSubtitle: "",
        postDescription: ""
    })

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
                        ...formInput, postImage: data.secure_url})
                })
        }
        catch (err) {
            console.log(err)
        }
    }

    const submitForm = async (e) => {
        e.preventDefault()
        const url = "https://thawing-headland-59245.herokuapp.com/api/post/new"
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formInput)
        };

        return fetch(url, options)
            .then((res) => res.json())
            .then((data) => {
                if (data.code === 11000) {
                    console.log("prodect added sucessfully")
                }
                else {
                    console.log(data)
                    return data
                }
            })
    }

    return (
        <div>
            <div>
            </div >
            <form>
                <div className={styles.formdetails}>
                    <div>
                        <input type="file" onChange={(e) => uploadImage(e)} />
                    </div>
                    <div>
                        <input type="text" placeholder="title" onChange={e => setFormInput({ ...formInput, postTitle: e.target.value })} />
                    </div>
                    <div>
                        <input type="text" placeholder="Subtitle" onChange={e => setFormInput({ ...formInput, postSubtitle: e.target.value })} />
                    </div>
                    <div>
                        <textarea onChange={e => setFormInput({ ...formInput, postDescription: e.target.value })}></textarea>
                    </div>
                    <div>
                        <button type="submit" onClick={submitForm} disabled={loading ? true : false}>{loading ? "Adding" : "Add"}</button>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default dashbord











