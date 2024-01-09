import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Register.module.css";
import coverImage from "../../assets/images/cover.png";
import Button from "../Button/Button";

export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        userName: "",
        isAgreed: false,
    });

    const [nameError, setNameError] = useState(true);
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        mobile: "",
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        let isValid = true;
        event.preventDefault();
        if (!formData.name.trim().length) {
            setNameError(true);
            setErrors({ ...errors, name: "Dynamic error message" });
        }

        // if (!formData.email.trim().length) {
        //     setErrors({ ...errors, name: "Dynamic error message" });
        // }

        // if (!formData.password.trim().length) {
        //     setErrors({ ...errors, name: "Dynamic error message" });
        // }

        // if (!formData.userName.trim().length) {
        //     setErrors({ ...errors, name: "Dynamic error message" });
        // }

        // if (!formData.isAgreed) {
        //     setNameError(true);
        //     setErrors({ ...errors, name: "Dynamic error message" });
        // }

        // every form data is filled properly
        // navigate to genre
        // also save the data in the localstorage
        if (formData.name && formData.userName) {
            localStorage.setItem("userData", formData);
            navigate("/genre");
        }
    };

    return (
        <div className={styles.container}>
            <div>
                <div className={styles.bottom}>
                    <p>Discover new things on SuperApp</p>
                </div>
                <img src={coverImage} alt="cover image of music" />
            </div>
            <div className={styles.body}>
                <p className={styles.super}>Super App</p>
                <p>Create a new Account</p>
                <p>
                    Email <span style={{ color: "green" }}>|</span> Google
                </p>
                <form>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        onChange={(event) => handleChange(event)}
                    ></input>

                    {errors.name ? (
                        <p className={styles.error}>Name field is required</p>
                    ) : (
                        <></>
                    )}

                    <input
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        onChange={(event) => handleChange(event)}
                    ></input>

                    {/* {userNameError ? (
                        <p className={styles.error}>Please fill correctly</p>
                    ) : (
                        <></>
                    )} */}

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={(event) => handleChange(event)}
                    ></input>

                    {/* {emailError ? (
                        <p className={styles.error}>Please fill correctly</p>
                    ) : (
                        <></>
                    )} */}

                    <input
                        type="tel"
                        name="mobile"
                        placeholder="Mobile"
                        onChange={(event) => handleChange(event)}
                    ></input>
                    {/* {mobileError ? (
                        <p className={styles.error}>Please fill correctly</p>
                    ) : (
                        <></>
                    )} */}

                    <label>
                        <input
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    [e.target.name]: e.target.checked,
                                })
                            }
                            // onChange={(event) => handleChange(event)}
                            type="checkbox"
                            name="check"
                        />
                        Share my registration data with Superapp
                    </label>

                    {/* {isAgreedError ? (
                        <p className={styles.error}>Please tick this</p>
                    ) : (
                        <></>
                    )} */}

                    <Button onClick={handleSubmit} />
                    <footer className={styles.footer}>
                        <p>
                            By clicking on Sign up. you agree to Superapp
                            <span style={{ color: "green" }}>
                                {" "}
                                Terms and Conditions of Use
                            </span>
                        </p>
                        <p>
                            To learn more about how Superapp collects, uses,
                            shares and protects your personal data please head
                            Superapp
                            <span style={{ color: "green" }}>
                                {" "}
                                Privacy Policy
                            </span>
                        </p>
                    </footer>
                </form>
            </div>
        </div>
    );
}
