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
                        <div className="homeMovieContainer">
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
export default Home;