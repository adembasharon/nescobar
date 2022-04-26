import React, { useState } from "react";
import { useRouter } from 'next/router';
import styles from "../styles/Home.module.css";
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


    const [currentUser, setCurrenUser] = useState();

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
                // location.reload()
                // setCurrenUser(await data.json())
                const result = await data.json();

                if (result.username !== undefined) {
                    router.push("/dashbord")
                } else {
setCurrenUser("User does not exist")
                }
                console.log(result.username)
            }
        } catch (error) {
            console.log(error.status)
        }}
    return (

        <div className={styles.loginContainer}>
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







            {/* <Card>
                            <CardContent>
                                <Image src={ssh} width={30} height={30} />
                                
                                <Typography sx={{ fontSize: 20, fontWeight: 500 }}>
                                    All of my commands I do them in Terminal,it helps me to develop my webpages.
                                </Typography>


                            </CardContent>

                        </Card> */}








        </div>

    )
}
export default Login