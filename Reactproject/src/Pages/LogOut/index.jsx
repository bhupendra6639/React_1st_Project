import "../LogOut/Styles/LogOut.scss"
import movie from "/Movie.svg"
import CircleLoad from "/LoadingSvg/Circle.svg";
import CustomApi from "../../CustomApi/CustomApi"

import { Link } from "react-router-dom";
function LogOut() {
    const {
        loading: homeLoader,
        error: loadError
    } = CustomApi({ url: "http://localhost:3000/Sign_Up_Data" })
    const {
        data: movieImgUrl1st
    } = CustomApi({ url: "http://localhost:3000/movies_first_row" })

    const {
        data: movieImgUrl2nd

    } = CustomApi({ url: "http://localhost:3000/movies_second_row" })

    return (
        <>
            {
                loadError ? <h2 className='Error'>404{loadError}</h2> :
                    homeLoader ? <img src={CircleLoad} alt="" className="circleLoader" /> : <div className="logOutPage">
                        <div className="movieNavigation">
                            <div className="SvgWrapperMovie">
                                <img src={movie} alt="" />
                            </div>
                            <div className="navregister">
                                <button className="ticket"><Link to='/LogIn'><span>My</span><span>Ticket</span></Link></button>
                                <button className="log-Out"><Link to='/home'>Logout</Link></button>
                            </div>
                        </div>
                        <div className="logOutMovieContainer">
                            <h2>Now Showing</h2>
                            <div className="moviesTemplates">
                                <div className="moviesWrappers">
                                    {
                                        movieImgUrl1st.map((index) => {
                                            return (
                                                <div className="movieImgWrapper" key={index.id}>
                                                    <img src={index.url} alt="" />
                                                    <span>movie title</span>
                                                </div>

                                            )
                                        })
                                    }
                                </div>
                                <div className="moviesWrappers">
                                    {
                                        movieImgUrl2nd.map((index) => {
                                            return (
                                                <div className="movieImgWrapper" key={index.id}>
                                                    <img src={index.url} alt="" />
                                                    <span>movie title</span>
                                                </div>

                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

            }
        </>
    )
};
export default LogOut;