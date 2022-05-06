import React, { useState, useEffect, useSelector } from "react";
import { useRouter } from 'next/router';
import styles from "../../styles/Home.module.css";
// import Typography from '@mui/material/Typography';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Icon from '@mui/material/Icon';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = () => {

    const [user, setUser] = useState({
        username: "",
        password: ""
    })


    const [loginMessage, setLoginMessage] = useState("")
    const [validationMessage, setValidationMessage] = useState({
        username: "",
        password: ""
    });
    const [showValidationMessage, setShowValidationMessage] = useState({
        username: false,
        password: false

    })


    const [currentUser, setCurrenUser] = useState('');

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
                const data = await fetch("https://thawing-headland-59245.herokuapp.com/api/auth/login", {
                    method: "POST",
                    mode: "cors",
                    body: JSON.stringify(user),
                    headers: {
                        "content-type": "application/json",
                        "accept": "application/json"
                    }
                }

                )
                    .catch(err => console.log('err'))
                const result = await data.json();
                console.log(result)
                if (result.username !== undefined) {
                    setCurrenUser(result.username)
                    router.push(
                        {
                            pathname: "/admin/dashbord",
                            query: { name: currentUser }
                        })
                    console.log(currentUser)

                } else {
                    setLoginMessage("Invalid credentials")

                }
            }
        } catch (error) {
            console.log(error.status)
        }
    }
    
useEffect(()=>{
    localStorage.setItem("user",JSON.stringify(user))
},[user])


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




        </div>

    )
}
export default Login