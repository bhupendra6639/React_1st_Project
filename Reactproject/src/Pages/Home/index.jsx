import "../Home/styles/Home.css"
import movie from "/Movie.svg"
import movie1 from "/MoviesSvg/image 1.svg"
import movie2 from "/MoviesSvg/image 2.svg"
import movie3 from "/MoviesSvg/image 3.svg"
import movie4 from "/MoviesSvg/image 4.svg"
import movie5 from "/MoviesSvg/image 5.svg"
import movie6 from "/MoviesSvg/image 6.svg"
import CircleLoad from "/LoadingSvg/Circle.svg"
import { Link } from "react-router-dom";
import CustomApi from "../../CustomApi/CustomApi"
function Home() {
    const {
        loading: homeLoader,
        error: HomeError
    } = CustomApi({ url: "http://localhost:3000/Sign_In_Data" })
    return (
        <>
            {
                HomeError ? <h2 className='Error'>404 {HomeError}</h2> :
                    homeLoader ? <img src={CircleLoad} alt="" className="circleLoader" /> : <div className="homePage">
                        <div className="movieNavigation">
                            <div className="SvgWrapperMovie">
                                <img src={movie} alt="" />
                            </div>
                            <div className="navregister">
                                <button className="loginButton"><Link to='/LogIn'>Login</Link></button>
                                <button className="registerButton"><Link to='/register-Here'>Register</Link></button>
                            </div>
                        </div>
                        <div className="moviesSections">
                            <div className="heading-Showing">
                                <span>Now Showing</span>
                            </div>
                            <div className="movies">
                                <div className="moviesWrappers1">
                                    <div className="moviewrap">
                                        <img src={movie1} alt="" />
                                    </div>
                                    <span>movie title</span>
                                </div>
                                <div className="moviesWrappers1">
                                    <div className="moviewrap">
                                        <img src={movie2} alt="" />
                                    </div>
                                    <span>movie title</span>
                                </div>
                                <div className="moviesWrappers1">
                                    <div className="moviewrap">
                                        <img src={movie3} alt="" />
                                    </div>
                                    <span>movie title</span>
                                </div>
                                <div className="moviesWrappers1">
                                    <div className="moviewrap">
                                        <img src={movie4} alt="" />
                                    </div>
                                    <span>movie title</span>
                                </div>
                            </div>
                            <div className="moviesWrappers2">
                                <div className="moviesWrappers1">
                                    <div className="moviewrap">
                                        <img src={movie5} alt="" />
                                    </div>
                                    <span>movie title</span>
                                </div>
                                <div className="moviesWrappers1">
                                    <div className="moviewrap">
                                        <img src={movie6} alt="" />
                                    </div>
                                    <span>movie title</span>
                                </div>
                            </div>
                        </div>
                    </div>

            }
        </>
    )
};
export default Home;