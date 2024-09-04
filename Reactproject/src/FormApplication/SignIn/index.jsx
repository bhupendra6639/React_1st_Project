import { useState, useEffect } from "react";
import '../SignIn/Styles/SignIn.css'
import { Link, useNavigate } from 'react-router-dom'
import movies from '/Movie.svg'
import CustomApi from "../../CustomApi/CustomApi";
function SignIn() {
    const [email, setEmail] = useState("");
    const [passworld, setPassworld] = useState("");
    const [confirmPassworld, setConfirmPassworld] = useState("");
    const {
        data: signindata
    } = CustomApi({ url: "http://localhost:3000/Sign_In_Data" })

    const handleEmail = (e) => {
        let temp = e.target.value;
        setEmail(e.target.value);
        console.log(signindata)
        signindata.map((data) => {
            if (data.email === temp) {
                alert("email alredy exist")
            }
        })
    }
    const handlePassworld = (e) => {
        setPassworld(e.target.value)
    }
    const handleConfirmPassworld = (e) => {
        setConfirmPassworld(e.target.value)
    }
    let navigate = useNavigate();
    const handlesubmite = (e) => {
        // e.preventDefault();
        if (passworld !== confirmPassworld) {
            alert("passworld not match")
        }
        else {
            let path = "/Home"
            fetch("http://localhost:3000/Sign_In_Data", {
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
            <div className="formContainer">
                <div className="cinemaTicket">
                    <div className="SvgWrapperMovie">
                        <img src={movies} alt="" />
                    </div>
                    <span>Welcome.
                        Begin your cinematic adventure now with our ticketing platform!</span>
                </div>
                <div className="formcontent">
                    <form action="" className="SignInSection" onSubmit={handlesubmite}>
                        <span>Create an account</span>
                        <div className="formWrapper">
                            <label htmlFor="Email">Email</label>
                            <input type="email" name="passworld" value={email} onChange={handleEmail} placeholder="Email" />
                        </div>
                        <div className="formWrapper">
                            <label htmlFor="passworld">passworld</label>
                            <input type="password" name="password" minlength="8" required placeholder="passworld" value={passworld} onChange={handlePassworld} />
                            <input type="password" name="confirm-Passworld" minlength="8" required placeholder="passworld" value={confirmPassworld} onChange={handleConfirmPassworld} />

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
                </div>
            </div>
        </>
    );
};
export default SignIn;