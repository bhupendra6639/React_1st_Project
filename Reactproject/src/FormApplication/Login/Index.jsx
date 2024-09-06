import '../Login/Styles/Login.css'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomApi from '../../CustomApi/CustomApi';
import CircleLoad from "/LoadingSvg/Infinity.svg"

function LoginIn() {
    const [email, setEmail] = useState("");
    const [notaccount, SetNotAccount] = useState(true)
    const [passworld, setPassworld] = useState("");

    // (############ Api fetch to sign in page #############) 

    const {
        data: LoginData,
        loading: Loader,
        error: logInError
    } = CustomApi({ url: "http://localhost:3000/Sign_In_Data" })

    const handleEmail = (e) => {
        setEmail(e.target.value);
        let temp = e.target.value;
        let found = false;
        for (let i = 0; i < LoginData.length; i++) {
            const keys = LoginData[i];
            if (keys.email === temp) {
                found = true;
                break;
            }
            else {
                continue;
            }
        }
        if (!found) {
            return (SetNotAccount(false))
        }
        else {
            return (SetNotAccount(true))
        }
    }
    // (#### passworld function############)
    const handlePassworld = (e) => {
        setPassworld(e.target.value)
        let temp = e.target.value;
        let found = false;
        for (let i = 0; i < LoginData.length; i++) {
            const keys = LoginData[i];
            if (keys.passworld === temp) {
                found = true;
                break;
            }
            else {
                continue;
            }
        }
        if (!found) {
            return (SetNotAccount(false))
        }
        else {
            return (SetNotAccount(true))
        }
    }
    //(####### Submite Functiom #########)
    let navigat = useNavigate();
    const handlesubmite = (e) => {
        let path = "/Home2"
        fetch("http://localhost:3000/Login_Data", {
            method: "POST",
            headers: {
                "content-type": "application.json"
            },
            body: JSON.stringify({
                email,
                passworld
            })
        })
        navigat(path)
    }

    return (
        <>
            {
                logInError ? <h2 className='Error'>404 {logInError}</h2> :
                    Loader ? <img src={CircleLoad} alt="" srcset="" className="circleLoader" /> : <div className="login-Container">
                        <form action="" className='loginWrapper' onSubmit={handlesubmite}>
                            <h2>Login to your account</h2>
                            <div className="logincontent">
                                {
                                    notaccount ? <></> : ("NOT Match")
                                }
                                <div className="LoginformWrapper">
                                    <label htmlFor="Email">Email</label>
                                    <input type="email" name="passworld" value={email} onChange={handleEmail} placeholder="Email" />
                                </div>
                                <div className="LoginformWrapper">
                                    <label htmlFor="passworld">passworld</label>
                                    <input type="password" name="password" minlength="8" required placeholder="Passworld" value={passworld} onChange={handlePassworld} />
                                </div>
                                <div className="LoginformWrapper">
                                    <input type="submit" className="submite" />
                                </div>
                                <div className="LoginformWrapper">
                                    <ul>
                                        <li>Don't have an account ?</li>
                                        <li><Link to={"/register-Here"}>register Here</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </form>

                    </div>

            }
        </>
    );
};
export default LoginIn;