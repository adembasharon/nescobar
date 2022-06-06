import React, { useState, useEffect, useContext,useRef } from "react";
import { useRouter } from 'next/router';
import styles from "../../styles/Home.module.css";
import AppContext from "../../public/images/src/state";
import dynamic from "next/dynamic"
import "suneditor/dist/css/suneditor.min.css";
// import Typography from '@mui/material/Typography';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Icon from '@mui/material/Icon';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
 import { Editor } from '@tinymce/tinymce-react';


const Login = () => {

    const [currentUser, setCurrentUser] = useContext(AppContext)

    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const editorRef = useRef(null);


    const [loginMessage, setLoginMessage] = useState("")
    const [validationMessage, setValidationMessage] = useState({
        username: "",
        password: ""
    });
    const [showValidationMessage, setShowValidationMessage] = useState({
        username: false,
        password: false

    })
    const [formInput, setFormInput] = useState({
        postImage: "",
        postTitle: "",
        postSubtitle: "",
        postDescription: "",
        postCartegory: ""
    })

    const SunEditor = dynamic(() => import("suneditor-react"), {
        ssr: false,
    });

    const router = useRouter();
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            if (user.username === '') {
                setShowValidationMessage({ ...validationMessage, username: true })
                setShowValidationMessage({ ...validationMessage, password: false })
                setValidationMessage({ ...validationMessage, username: "UserName is required" })
                console.log(validationMessage)
            }
            else if (user.password === '') {
                setShowValidationMessage({ ...validationMessage, password: true })
                setShowValidationMessage({ ...validationMessage, username: false })
                setValidationMessage({ ...validationMessage, password: "Password is required" })
            }
            else {
                const data = await fetch("http://localhost:5000/api/auth/login", {
                    method: "POST",
                    mode: "cors",
                    body: JSON.stringify(user),
                    headers: {
                        "content-type": "application/json",
                        "accept": "application/json"
                    }
                }

                )
                    .catch(err => console.log(err))
                const result = await data.json();
                localStorage.setItem("loggedInUser", JSON.stringify([result]))
                console.log(result)
                if (result.username !== undefined) {
                    setCurrentUser(result.username)
                    router.push(
                        {
                            pathname: "/admin/dashbord",
                            query: { name: currentUser }
                        })
                    // console.log(currentUser)

                } else {
                    setLoginMessage("Invalid credentials")

                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user))
    }, [user])
 

    return (

        <div className={styles.loginContainer}>
            <form className={styles.loginform}>
                <div className={styles.loginspan}>
                    <p style={{ textAlign: "center", color: "red", fontSize: "2rem" }} >{loginMessage}</p>
                    <div>
                        <span className={styles.loginSpanItem}>{validationMessage.username}</span>
                    </div>
                    <div>
                        <input type="text" placeholder="UserName" onChange={e => setUser({ ...user, username: e.target.value })} />
                    </div>
                </div>

                <div className={styles.loginspan}>
                    <div>
                        <span className={styles.loginSpanItem}>{validationMessage.password}</span>
                    </div>

                    <div>
                        <input type="password" placeholder="Password" onChange={e => setUser({ ...user, password: e.target.value })} />
                    </div>
                </div>
                <div className={styles.checkbox}>

                    <div>
                        <input type="checkbox" />
                    </div>
                    <div>
                        <p>Remember me </p>
                    </div>
                </div>

                <div>
                    <button onClick={handleSubmit}>Login</button>
                </div>
                <p>Forgot your password ?</p>

            </form>

{/* 
ztupqk38wc827qenq0pnh9o72oty3dgubijzmsqa1ty6dceq

*/}

            {/* editor
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

       <button onClick={()=>{console.log(formInput)}}>Click Me</button>
</div> */}

            {/* 
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5>New post</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                        <form className={styles.loginform}>
                <div className={styles.loginspan}>
                    <p style={{textAlign:"center", color:"yellow", fontSize:"2rem"}} >{currentUser}</p>
                    <div>
                        <span className={styles.loginSpanItem}>{validationMessage.username}</span>
                    </div>
                    <div>
                        <input type="text" placeholder="UserName" onChange={e => setUser({ ...user, username: e.target.value })} />
                    </div>
                </div>

                <div className={styles.loginspan}>
                    <div>
                        <span className={styles.loginSpanItem}>{validationMessage.password}</span>
                    </div>

                    <div>
                        <input type="password" placeholder="Password" onChange={e => setUser({ ...user, password: e.target.value })} />
                    </div>
                </div>
                <div className={styles.checkbox}>

                    <div>
                        <input type="checkbox" />
                    </div>
                    <div>
                        <p>Remember me </p>
                    </div>
                </div>

                <div>
                    <button onClick={handleSubmit}>Login</button>
                </div>
                <p>Forgot your password ?</p>

            </form>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" onClick={submitForm} disabled={loading ? true : false} className="btn btn-primary">{loading ? "Adding" : "Add"}</button>
                        </div>
                    </div>
                </div>
            </div> */}
{/* 
            <form>
                <div>
                    <input type="file" onChange={(e) => uploadImage(e)} />
                </div>
                <div>
                    <input type="text" placeholder="Title" onChange={e => setFormInput({ ...formInput, postTitle: e.target.value })} />
                </div>
                <div>
                    <input type="text" placeholder="SubTittle"  />
                </div>
                <div>
                    <SunEditor
                        setContents={formInput.postDescription}
                        onChange={(e) => setFormInput({ ...formInput, formDescription: e })}
                    />
                </div>

            </form> */}


        </div>

    )
}
export default Login