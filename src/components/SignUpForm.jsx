import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { useAuth } from "../hooks/use-auth";
import postAccount from "../api/post-account";


function SignUpForm() {
    const navigate = useNavigate();
    const {auth, setAuth} = useAuth();

    const [userDetails, setUserDetails] = useState({
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        email: "",
    });
    
    const handleChange = (event) => {
        const { id, value } = event.target;
        setUserDetails((prevUserDetails) => ({
            ...prevUserDetails,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userDetails.username) {
            postAccount(
                userDetails.username,
                userDetails.password,
                userDetails.firstname,
                userDetails.lastname,
                userDetails.email
            ).then((response) => {
                window.localStorage.setItem("token", response.token);
                setAuth({
                    token: response.token,
                });
                navigate("/login");
            });
        }
    };
    
    
    
    return (
        <form>
            <div>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text" 
                    id="username" 
                    placeholder="Enter username"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    id="password" 
                    placeholder="Enter password" 
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="firstname">First name:</label>
                <input 
                    type="text" 
                    id="firstname" 
                    placeholder="Enter first name" 
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="lastname">Last name:</label>
                <input 
                    type="text" 
                    id="lastname" 
                    placeholder="Enter last name" 
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                    type="text" 
                    id="email" 
                    placeholder="Enter email" 
                    onChange={handleChange}
                />
            </div>
            <button type="submit" onClick={handleSubmit}>
                Create Account
            </button>
        </form>
    );


};

export default SignUpForm