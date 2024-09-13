import "../LogOut/Styles/LogOut.css"
import movie from "/Movie.svg"
import movie1 from "/MoviesSvg/image 1.svg"
import movie2 from "/MoviesSvg/image 2.svg"
import movie3 from "/MoviesSvg/image 3.svg"
import movie4 from "/MoviesSvg/image 4.svg"
import movie5 from "/MoviesSvg/image 5.svg"
import movie6 from "/MoviesSvg/image 6.svg"

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
                    homeLoader ? <img src={CircleLoad} alt="" className="circleLoader" /> : <div className="homePage">
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