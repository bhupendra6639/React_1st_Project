import { useState, useEffect } from "react";
import './Styles/SignIn.css'
import { Link, useNavigate } from 'react-router-dom'
import movies from '/Movie.svg'
import CustomApi from "../../CustomApi/CustomApi";
import CircleLoad from "/LoadingSvg/Infinity.svg"
function SignIn() {
    const [email, setEmail] = useState("");
    const [passworld, setPassworld] = useState("");
    const [confirmPassworld, setConfirmPassworld] = useState("");

    //    (************ API FETCH TO REGRISTRATION **************)

    const {
        data: signindata,
        loading: Loader,
        error: signInError
    } = CustomApi({ url: "http://localhost:3000/Sign_Up_Data" })

    //    (************ Email Function For REGRISTRATION **************)

    const [emailverified, SetEmailVerified] = useState(true)

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

    //    (************ Passworld Function For REGRISTRATION **************)

    const handlePassworld = (e) => {
        setPassworld(e.target.value)
    }

    //    (************ ConfirmPassworld Function For REGRISTRATION **************)

    const handleConfirmPassworld = (e) => {
        setConfirmPassworld(e.target.value)
    }

    //    (************ Submite Function For REGRISTRATION **************)

    let navigate = useNavigate();
    const handlesubmite = (e) => {
        e.preventDefault();
        if (passworld !== confirmPassworld) {
            alert("passworld not match")
        }
        else {
            let path = "/Home"
            fetch("http://localhost:3000/Sign_Up_Data", {
                method: "POST",
                headers: {
                    "content-type": "application.json"
                },
                body: JSON.stringify({
                    email,
                    passworld,
                    confirmPassworld,
                })
            })
            alert("account created")
            navigate(path)
        }
    }
    return (
        <>
            {
                signInError ? <h2 className='Error'>404 {signInError}</h2> :
                    Loader ? <img src={CircleLoad} alt="" srcset="" className="circleLoader" /> :
                        <div className="formContainer">
                            <div className="cinemaTicket">
                                <div className="SvgWrapperMovie">
                                    <img src={movies} alt="" />
                                </div>
                                <span>Welcome.<br></br>
                                    Begin your cinematic adventure now with our ticketing platform!</span>
                            </div>
                            <div className="formcontent">
                                <form action="" className="SignInSection" onSubmit={handlesubmite}>
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
                                        <input type="password" name="password" minlength="8" required placeholder="Passworld" value={passworld} onChange={handlePassworld} />
                                        <input type="password" name="confirm-Passworld" minlength="8" required placeholder="Confirm Passworld" value={confirmPassworld} onChange={handleConfirmPassworld} />

                                    </div>

                                    <div className="formWrapper">
                                        <input type="submit" className="submite" value="Create account" />
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