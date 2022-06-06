import React, { useState } from "react"
import styles from "../styles/Home.module.css";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Footer from "./Footer";
import Nav from "./Nav";



const Booking = () => {
    const [formData, setFormData] = useState({
        name: "",
        phonenumber: "",
        email: "",
        category: "",
        message: ""

    })
    const handleSubmit = async (e) => {
        e.preventDefault();


        const data = await fetch("http://localhost:5000/api/booking", {
            method: "POST",
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
         await data.json()
            .catch((error) => {
                console.log(error)
            })


        console.log(formData)
    }

    return (
        <div>
            <Nav/>
        <div className={styles.formContent}>
            <form className={styles.formContainer}>

                <div className={styles.formLabel}>
                    <div style={{marginTop:2}}>
                        <label>Full Name</label>
                    </div>
                    <div>
                        <input onChange={(e) => setFormData({ ...formData, name: e.target.value })} type="text" placeholder="" />
                    </div>
                </div>

                <div className={styles.formLabel}>
                    <div>
                        <label>Phone Number</label>
                    </div>
                    <div>
                        <input onChange={(e) => setFormData({ ...formData, phonenumber: e.target.value })} type="text" placeholder="" />
                    </div>
                </div>


                <div className={styles.formLabel}>
                    <div>
                        <label>Email adress</label>
                    </div>
                    <div>
                        <input onChange={(e) => setFormData({ ...formData, email: e.target.value })} type="email" placeholder="" />
                    </div>
                </div>

                <div>
                    <select onChange={(e) => setFormData({ ...formData, category: e.target.value })} className={styles.selectItem}>
                        <option>Choose a cartegory</option>
                        <option> Dj Nesco for event</option>
                        <option> Nesco for modeling</option>
                        <option>Write blog</option>
                    </select>
                </div>

                <div className={styles.formLabel}>
                    <div>
                        <label>Send me a message</label>
                    </div>
                    <div>
                        <textarea onChange={(e) => setFormData({ ...formData, message: e.target.value })} ></textarea>
                    </div>
                </div>
                <div>
                    <button onClick={(e) => { handleSubmit(e) }}>Submit</button>
                </div>
            </form>


           
        </div>
        <Footer/>
        </div>
    )
}
export default Booking






