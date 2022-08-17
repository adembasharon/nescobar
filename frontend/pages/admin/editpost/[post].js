import { useRouter } from 'next/router'
import React, { useState, useEffect, useRef, useContext } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Link from 'next/link';
import AppContext from "../../../public/images/src/state";

import axios from "axios";
const Post = () => {

    let currentPost;
    const {userState, postsState} = useContext(AppContext)
    const [currentUser, setCurrentUser] = userState
    const [posts, setPosts] = postsState

    const router = useRouter()
    const { post } = router.query


    const [formInput, setFormInput] = useState({
        postImage: currentPost && currentPost.postImage,
        postDescription: currentPost && currentPost.postDescription,
        postSubtitle: currentPost && currentPost.postSubtitle,
        postTitle: currentPost  && currentPost.postTitle,



    })

    const editorRef = useRef(null);

    
    
    useEffect(() => {
        
        console.log(currentUser)

        const user = localStorage.getItem("loggedInUser");
        setCurrentUser(JSON.parse(user))

        console.log(currentUser)

    }, [])




    useEffect(() => {
        localStorage.setItem("posts", JSON.stringify(posts))
    }, [posts])

    console.log(posts)



    posts.map(detail => {
        if (detail.postTitle.toLowerCase() === post.toLocaleLowerCase()) {
            currentPost = detail
            console.log(detail.postTitle)
        }

    })

    //update 
    const updated = async (id) => {

        const data = await fetch(`http://localhost:5000/api/post/${id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json',
                "token": `Bearer ${currentUser[0].accessToken}`
            },
            body: JSON.stringify(formInput)
        })

        console.log(await data.json())

        console.log(currentPost)


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
                        ...formInput, postImage: data.secure_url
                    })
                })
        }
        catch (err) {
            console.log(err)
        }
    }



    return (
        <div>
            <div>
                <input type="file"  onChange={(e) => uploadImage(e)} />
            </div>
            <div>
                <input type="text" placeholder="Title" defaultValue={currentPost !== undefined && currentPost.postTitle} onChange={e => setFormInput({ ...formInput, postTitle: e.target.value })} />
            </div>
            <div>
                <input type="text" placeholder="SubTittle" defaultValue={currentPost !== undefined && currentPost.postSubtitle} onChange={e => setFormInput({ ...formInput, postSubtitle: e.target.value })} />
            </div>
            <Editor
                apiKey="ztupqk38wc827qenq0pnh9o72oty3dgubijzmsqa1ty6dceq"
                onEditorChange={e => setFormInput({ ...formInput, postDescription: e })}
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue={currentPost !== undefined && currentPost.postDescription}
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar: 'undo redo | formatselect | ' +
                        'bold italic backcolor | link image | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
            <div style={{ display: "flex", alignItem: "center", justifyContent: "center", gap: 4 }}>
                <div className="button">
                    <button onClick={() => updated(currentPost._id)}>Update</button>
                </div>
                <div>
                    <Link href="/admin/dashbord">
                        <button>Dashboard</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Post
