import React from "react";



import Auth from "../../services/Auth";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

//media
import image from "../assets/hot-air.png";
import "../../custom.css";

function LoginPage() {
    const login = async (loginData) => {
        const loginSuccess = await Auth.login(loginData);
        if (!loginSuccess) {
            alert("Invalid credentials");
        }
    }

    const register = async (registrationData) => {
        const registerSuccess = await Auth.register(registrationData);
        if (!registerSuccess) {
            alert("Couldn't register check credentials and try again");
        }
    }

    return (
        <div className="wrapper">
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-6 " style={{ color: " #E74C3C" }}>
                        <h1>Travell-Full</h1>
                        <h5>Food worth moving for</h5>
                        <img classname= "loginImage"src={image} alt="Italian Trulli"></img>
                    </div>

                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-12  strong-shadow">
                                <LoginForm onSubmit={login} />
                            </div>

                            <div className="col-12 mt-4">
                                <RegisterForm onSubmit={register} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;