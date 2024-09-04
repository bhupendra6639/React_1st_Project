import '../Login/Styles/Login.css'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function LoginIn() {
    const [email, setEmail] = useState("");
    const [passworld, setPassworld] = useState("");
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassworld = (e) => {
        setPassworld(e.target.value)
    }
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
            <div className="login-Container">
                <form action="" className='loginWrapper' onSubmit={handlesubmite}>
                    <h2>Login to your account</h2>
                    <div className="logincontent">
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
        </>
    );
};
export default LoginIn;