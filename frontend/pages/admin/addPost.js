import React ,{useRef,useState,useEffect,useContext}from "react"
import dynamic from "next/dynamic"
import "suneditor/dist/css/suneditor.min.css";
import { Editor } from '@tinymce/tinymce-react';
import Link from "next/link";
import axios from "axios";
import AppContext from "../../public/images/src/state"




const AddPost=()=>{
    const [formInput, setFormInput] = useState({
        postImage: "",
        postTitle: "",
        postSubtitle: "",
        postDescription: "",
        postCartegory: ""
    })
   
    const {userState, postsState} = useContext(AppContext)
    const [currentUser, setCurrentUser] = userState
    const [posts, setPosts] = postsState
    

    
    const SunEditor = dynamic(() => import("suneditor-react"), {
        ssr: false,
    });
    const editorRef = useRef(null);

    const submitForm = async (e) => {
        e.preventDefault()
        const url = " http://localhost:5000/api/post/new"
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formInput)
        };

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
                        ...formInput, postImage: data.secure_url
                    })
                })
        }
        catch (err) {
            console.log(err)
        }
    }



    return(
        <div>
             <div>
                    <input type="file" onChange={(e) => uploadImage(e)} />
                </div>
                <div>
                    <input type="text" placeholder="Title" onChange={e => setFormInput({ ...formInput, postTitle: e.target.value })} />
                </div>
                <div>
                    <input type="text" placeholder="SubTittle"  onChange={e => setFormInput({ ...formInput, postSubtitle: e.target.value })}/>
                </div>
   <Editor
            apiKey="ztupqk38wc827qenq0pnh9o72oty3dgubijzmsqa1ty6dceq"
            onEditorChange={e=>setFormInput({...formInput,postDescription:e})}
         onInit={(evt, editor) => editorRef.current = editor}
         initialValue=""
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
       <div style={{display:"flex",alignItem:"center",justifyContent:"center",gap:4}}>
<div className="button">
       <button onClick={submitForm}>Add</button>
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


export default AddPost;
