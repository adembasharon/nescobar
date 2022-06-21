import React from "react"
import styles from "../styles/Home.module.css";

const Order=()=>{
return (
    <div>
        {/*
        <form className="oders">
            <div>
            <p>Kindly note that payment is done on deliery</p>
            </div>
            <div>
            <input type="text" placeholder="Your Name"/>
            </div>
            <div>
            <input type="text" placeholder="Adresses"/>
            </div>
            <div>
            <input type="text" placeholder="Phone Number"/>
            </div>
            <div>
            <input type="text" placeholder="Location"/>
            </div>
            <div>
            <button>Order</button>
            </div>

         </form> */}

{/* trial */}
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5>New post</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                        <form className={styles.loginform}>
               <div>
                        <input type="text" placeholder="UserName"/>
                    </div>

                <div className={styles.loginspan}>
                    
                    <div>
                        <input type="password" placeholder="Password"/>
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
                    <button>Login</button>
                </div>
                <p>Forgot your password ?</p>

            </form>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div> 


    </div>
)
}
export default Order