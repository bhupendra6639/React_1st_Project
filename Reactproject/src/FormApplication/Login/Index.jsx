import '../Login/Styles/Login.scss'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomApi from '../../CustomApi/CustomApi';
import CircleLoad from "/LoadingSvg/Infinity.svg"
import Eye from "/eye.svg";
function LoginIn() {
    // const [email, setEmail] = useState("");
    // const [passworld, setPassworld] = useState("");
    // const [isdisabled, setIsDisabled] = useState(true);
    const [email, setEmail] = useState("");
    const [passworld, setPassworld] = useState("");
    const [notaccountCreated, SetNotAccountCreated] = useState(true)
    const [isdisabled, setIsDisabled] = useState(true);
    const [isPasswordDisplay, setIsPasswordDisplay] = useState(true);
    const [notPasswordmatch, SetNotPasswordMatch] = useState(true)
    useEffect(() => {
        if (email && passworld) {
            // setIsDisabled(false)
            for (let i = 0; i < LoginData.length; i++) {
                if (LoginData[i].email === email && LoginData[i].passworld === passworld) {
                    setIsDisabled(false);
                }
                else {
                    setIsDisabled(true)
                }

            }

        }
        else {
            setIsDisabled(true)
        }
    }, [email, passworld])
    // (############ Api fetch to sign in page #############) 

    const {
        data: LoginData,
        loading: Loader,
        error: logInError
    } = CustomApi({ url: "http://localhost:3000/Sign_Up_Data" })

    const handleEmail = (e) => {
        setEmail(e.target.value);
        let found = false;
        for (let i = 0; i < LoginData.length; i++) {
            const keys = LoginData[i];
            if (keys.email === e.target.value) {
                found = true;
                break;
            }
            else {
                continue;
            }
        }
        if (!found) {
            return (SetNotAccountCreated(false))
        }
        else {
            return (SetNotAccountCreated(true))
        }
    }
    // (#### passworld function############)
    const handlePassworld = (e) => {
        setPassworld(e.target.value)
        let found = false;
        for (let i = 0; i < LoginData.length; i++) {
            const keys = LoginData[i];
            if (keys.passworld === e.target.value && keys.email === email) {
                found = true;
                break;
            }
            else {
                continue;
            }
        }
        if (!found) {
            return (SetNotPasswordMatch(false))
        }
        else {
            return (SetNotPasswordMatch(true))
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
                    Loader ? <img src={CircleLoad} alt="" className="circleLoader" /> : <div className="login-Container">
                        <form action="" className='loginWrapper' onSubmit={handlesubmite}>
                            <h2>Login to your account</h2>
                            <div className="logincontent">
                                {
                                    email && !notaccountCreated && ("ERROR : Account not exit")
                                }
                                <div className="LoginformWrapper">
                                    <label htmlFor="Email">Email</label>
                                    <input type="email" name="passworld" value={email} onChange={handleEmail} placeholder="Email" />
                                </div>
                                <div className="LoginformWrapper">
                                    <label htmlFor="passworld">passworld</label>
                                    <div className="eyeWrappersvg">
                                        <input type={isPasswordDisplay ? "password" : "text"} name="password" minlength="8" required placeholder="Passworld" value={passworld} onChange={handlePassworld} />
                                        <img src={Eye} alt="" onClick={() => setIsPasswordDisplay(!isPasswordDisplay)} />
                                    </div>
                                </div>
                                {
                                    passworld && !notPasswordmatch && ("ERROR : Password not match")
                                }
                                <div className="LoginformWrapper">
                                    <input type="submit" className="submite" disabled={isdisabled} />
                                </div>
                                <div className="noteformWrapper">
                                    <span>Don't have an account ?
                                        <span><Link to={"/register-Here"}> register Here</Link></span></span>
                                </div>
                            </div>
                        </form>

                    </div>

            }
        </>
    );
};
export default LoginIn;