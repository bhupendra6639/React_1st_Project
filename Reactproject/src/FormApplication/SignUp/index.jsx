import { useState, useEffect } from "react";
import './Styles/SignIn.scss'
import { Link, useNavigate } from 'react-router-dom'
import movies from '/Movie.svg'
import CustomApi from "../../CustomApi/CustomApi";
import CircleLoad from "/LoadingSvg/Infinity.svg"
import Eye from "/eye.svg"
function SignIn() {
    // USESTATES SECTION TO CREATED
    const [email, setEmail] = useState("");
    const [passworld, setPassworld] = useState("");
    const [confirmPassworld, setConfirmPassworld] = useState("");
    const [isPasswordDisplay, setIsPasswordDisplay] = useState(true);
    const [emailverified, SetEmailVerified] = useState(true)
    const [isConfirmPasswordDisplay, setIsConfirmPasswordDisplay] = useState(true);
    const [passwordMaching, setPassworldMaching] = useState(false)
    const [isdisable, setisDisable] = useState(true);

    //USEEFFECT SECTION TO CREATED 

    useEffect(() => {
        if (email && passworld && confirmPassworld) {
            for (let i = 0; i < signindata.length; i++) {
                if (signindata[i].email === email) {
                    setisDisable(true)
                    break;
                }
                else if (passworld !== confirmPassworld) {
                    setisDisable(true)
                }
                else {
                    setisDisable(false)
                }
            }

        }
        else {
            setisDisable(true)
        }
    }, [email, passworld, confirmPassworld])


    //    (************ API FETCH TO REGRISTRATION **************)

    const {
        data: signindata,
        loading: Loader,
        error: signInError
    } = CustomApi({ url: "http://localhost:3000/Sign_Up_Data" })

    //    (************ Email Function For REGRISTRATION **************)

    const handleEmail = (e) => {
        setEmail(e.target.value);
        let temp = e.target.value;
        let found = false;
        for (let i = 0; i < signindata.length; i++) {
            const keys = signindata[i];
            if (keys.email === temp) {
                found = true;
                break;
            }
            else {
                continue;
            }
        }
        if (!found) {
            return (SetEmailVerified(false))
        }
        else {
            return (SetEmailVerified(true))
        }
    }

    //SETHANDELFUNCTIONS SECTIONS 

    //    (************ Passworld Function For REGRISTRATION **************)

    const handlePassworld = (e) => {
        setPassworld(e.target.value)
    }

    //    (************ ConfirmPassworld Function For REGRISTRATION **************)

    const handleConfirmPassworld = (e) => {
        setConfirmPassworld(e.target.value)
        if (e.target.value === passworld) {
            setisDisable(false)
            setPassworldMaching(true)
        }
        else {
            setisDisable(true)
            setPassworldMaching(false)
        }
    }

    //    (************ Submite Function For REGRISTRATION **************)

    let navigate = useNavigate();
    const handleCreatedAccoutn = () => {
        let path = "/Home"
        fetch("http://localhost:3000/Sign_Up_Data", {
            method: "POST",
            headers: {
                "content-type": "application.json"
            },
            body: JSON.stringify({
                email,
                passworld
            })
        })
        alert("account created")
        navigate(path)

    }
    return (
        <>
            {
                signInError ? <h2 className='Error'>404 {signInError}</h2> :
                    Loader ? <img src={CircleLoad} alt="" srcset="" className="circleLoader" /> :
                        <div className="signUPContainer">
                            <div className="leftSection">
                                <div className="SvgWrapperMovie">
                                    <img src={movies} alt="" />
                                </div>
                                <span>Welcome.<br></br>
                                    Begin your cinematic adventure now with our ticketing platform!</span>
                            </div>
                            <div className="rightSection">
                                <form action="" className="createAccount" onSubmit={handleCreatedAccoutn}>
                                    <span>Create an account</span>
                                    {
                                        emailverified ? (email ? <small>Account alredy verified</small> : <></>) : <></>
                                    }
                                    <div className="formWrapper">
                                        <label htmlFor="Email">Email</label>
                                        <input type="email" name="passworld" value={email} onChange={handleEmail} placeholder="Email" />
                                    </div>
                                    <div className="formWrapper">
                                        <label htmlFor="passworld">passworld</label>
                                        <div className="eyeWrappersvg">
                                            <input type={isPasswordDisplay ? "password" : "text"} name="password" minlength="8" required placeholder="Passworld" value={passworld} onChange={handlePassworld} />
                                            <img src={Eye} alt="" onClick={() => setIsPasswordDisplay(!isPasswordDisplay)} />
                                        </div>
                                        <div className="eyeWrappersvg">
                                            <input type={isConfirmPasswordDisplay ? "password" : "text"} name="confirm-Passworld" minlength="8" required placeholder="Confirm Passworld" value={confirmPassworld} onChange={handleConfirmPassworld} />
                                            <img src={Eye} alt="" onClick={() => setIsConfirmPasswordDisplay(!isConfirmPasswordDisplay)} />
                                        </div>
                                        {
                                            confirmPassworld && !passwordMaching && <small style={{ fontWeight: "bold" }}>ERROR :Password does not match</small>
                                        }
                                    </div>

                                    <div className="formWrapper">
                                        <input type="submit" className="submite" value="Create account" disabled={isdisable} />
                                    </div>
                                    <div className="formWrapper">
                                        <ul>
                                            <li>Already have an account ?</li>
                                            <li><Link to={"/LogIn"}>Log in</Link></li>
                                        </ul>
                                    </div>
                                </form>
                            </div >
                        </div >

            }
        </>
    );
};
export default SignIn;