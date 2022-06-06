import { useRouter } from 'next/router'
import React, { useState, useEffect, useRef,useContext } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Link from 'next/link';
import AppContext from "../../../public/images/src/state"
import axios from "axios";
const Post = () => {
    const [currentUser, setCurrentUser] = useContext(AppContext)

    const router = useRouter()
    const { post } = router.query
    

    const [formInput, setFormInput] = useState({
        postImage: "",
        postTitle: "",
        postSubtitle: "",
        postDescription: "",
        postCartegory: ""
    })
    const editorRef = useRef(null);

    const [details, setDetails] = useState([])
    const url = 'http://localhost:5000/api/post/'
    useEffect(() => {
        getPosts()
        console.log(currentUser)

       const user = localStorage.getItem("loggedInUser");
       setCurrentUser(JSON.parse(user))

       console.log(currentUser)
     
    }, [])


    const getPosts = () => axios.get(url)
        .then((res) => {
            setDetails(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
 

    useEffect(() => {
        localStorage.setItem("details", JSON.stringify(details))
    }, [details])

    console.log(details)
 
    let currentPost;

    details.map(detail => {
        if (detail.postTitle.toLowerCase() === post.toLocaleLowerCase()) {
            currentPost=detail
            console.log(detail.postTitle)
          }
          
      })

//update 
const updated = async (id) => {

await fetch(`http://localhost:5000/api/post/${id}`, {
    method: "PUT",
    body:formInput,
    headers: {
        "token": `Bearer ${currentUser[0].accessToken}`
    }
})

console.log(JSON.stringify(formInput))


}



      

    return (
        <div>
         <div>
                <input type="file" onChange={(e) => uploadImage(e)} />
            </div>
            <div>
                <input type="text" placeholder="Title" value={currentPost !== undefined && currentPost.postTitle} onChange={e => setFormInput({ ...formInput, postTitle: e.target.value })} />
            </div>
            <div>
                <input type="text" placeholder="SubTittle" value={currentPost !== undefined && currentPost.postSubtitle} onChange={e => setFormInput({ ...formInput, postSubtitle: e.target.value })} />
            </div>
            <Editor
                apiKey="ztupqk38wc827qenq0pnh9o72oty3dgubijzmsqa1ty6dceq"
                onEditorChange={e => setFormInput({ ...formInput, postDescription: e })}
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue={currentPost !==undefined && currentPost.postDescription}
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
                    <button onClick={(e) => updated(currentPost._id)}>Update</button>
                </div>
                <div>
                    <Link href="/admin/dashbord">
                        <button>Dashbord</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Post
