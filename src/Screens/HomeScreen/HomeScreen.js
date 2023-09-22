import { Alert } from "react-bootstrap"
import "../HomeScreen/HomeScreen.scss"
import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import MyGarage from "../MyGarageScreen/MyGarageScreen"
import RacingImg from "../../assets/img/racing.png"
import thLogo from "../../assets/img/thLogo.png"
import worldWidePng from "../../assets/img/worldWide.png"
import 'animate.css';

const HomeScreen = () => {

    const [imput, setimput] = useState({
        'UserName': '',
        'Password': ''
    })
    window.scrollTo(0, 0)
    const [user, setUser] = useState()
    const navigate = useNavigate()
    const [showErrorMessage, setshowErrorMessage] = useState({
        'message': '',
        'status': "",
    })


    const handleChange = (e) => {
        setimput({
            ...imput,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // if (imput.UserName.length < 5) {
        //     setshowErrorMessage({ message: "Serial number must be 10 digits", status: "danger" })
        // }
        // else {
        //     let response = await axios.post("http://localhost:5000/newUser", { "username": imput.UserName, "password": imput.Password })
        //     console.log(response.data[0])
        //     if (response.data[0]) {
        //         setshowErrorMessage({ message: "everything ok", status: "success" })
        //         navigate("gateway")
        //     }
        //     else {
        //         setshowErrorMessage({ message: "not okey", status: "danger" })
        //     }
        // }}

        try {
            let response = await axios.post("http://localhost:5000/login", { "username": imput.UserName, "password": imput.Password })
            if (response) {

                navigate("gateway", { state: response.data.token })
            } else {
                setshowErrorMessage({ message: "not okey", status: "danger" })
            }
        } catch {
            setshowErrorMessage({ message: "not okey", status: "danger" })
        }
    }

    useEffect(() => {
        axios.get("http://localhost:5000/users")
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [])

    return (
        <>
            <div className="sm:ml-52">
                <div class="container mx-auto my-20 animate__animated animate__fadeIn">
                    <div class="text-center px-3 md:pt-12">
                        <h1 class="headerTitle my-4 text-[45px] md:text-[50px] lg:text-[70px] leading-tight">
                            It's Time To Take HotWheels To The Next Level
                        </h1>
                        <p class="font-mono leading-normal text-gray-600 text-xl md:text-xl lg:text-2xl mb-8">
                            Sub-hero message, not too long and not too short. Make it just right!
                        </p>
                    </div>
                    <div class="flex items-center w-full p-5 mx-auto">
                        <div class="browser-mockup flex flex-1 justify-center md:px-5 md:m-12 bg-white bg-opacity-70 w-1/2 rounded shadow-xl">
                            <div className="text-center px-5 py-20">
                                <h2 className="mockupTitle mt-10 text-[30px] md:text-[40px] lg:text-[50px]">The New Way To Get Hot Wheels!</h2>
                                <p className="mt-5 font-mono leading-normal text-gray-600 text-l md:text-xl lg:text-xl mb-8">Play Hotwheels game, earn credits and use them to buy virtual or even physical models</p>
                                <div className="inline-block mt-2">
                                    <button onClick={() => navigate("/gamescreen")} class="fortnite-btn flex items-center justify-center h-[60px] md:h-[70px] w-[200px] md:w-[250px]">
                                        <span class="fortnite-btn-inner p-1 pt-2  md:text-4xl text-3xl truncate">Get Started!</span>
                                    </button>
                                </div>
                                <div className="flex justify-center mt-3">
                                    <img className=" w-[400px] h-[200px] md:w-[500px] md:h-[200px] animate__animated animate__pulse animate__slow animate__infinite" src={RacingImg}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section class="bg-white bg-opacity-70 border-b py-12 px-5 ">
                    <div
                        class="container mx-auto flex flex-wrap items-center justify-between pb-12">
                        <h2 class="collectionTitle w-full my-2 text-[30px] md:text-[40px] lg:text-[50px] text-center lg:mt-8">
                            Build Your Own Collection
                        </h2>
                        <div class="w-full mb-4">
                            <div
                                class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
                            ></div>
                        </div>

                        <div class="flex flex-1 flex-wrap max-w-6xl mx-auto items-center justify-between text-lg md:text-xl text-gray-500 font-bold opacity-75">
                            <a class="w-1/2 p-4 md:w-auto flex items-center font-mono cursor-pointer hover:scale-[1.2] hover:text-orange-700">
                                <img className="w-[50px] p-1" src={thLogo}></img>MAINLINE</a >

                            <a class="w-1/2 p-4 md:w-auto flex items-center font-mono cursor-pointer hover:scale-[1.2] hover:text-orange-700">
                                <img className="w-[50px] p-1" src={thLogo}></img>TREASURE HUNT</a>

                            <a class="w-1/2 p-4 md:w-auto flex items-center font-mono cursor-pointer hover:scale-[1.2] hover:text-orange-700">
                                <img className="w-[50px] p-1" src={thLogo}></img>SUPER TREASURE HUNT</a>
                            <a class="w-1/2 p-4 md:w-auto flex items-center font-mono cursor-pointer hover:scale-[1.2] hover:text-orange-700">
                                <img className="w-[50px] p-1" src={thLogo}></img>SUPER TREASURE HUNT</a>
                        </div>
                    </div>
                </section>
                <section class="bg-gray-100 border-b py-8">
                    <div class="container max-w-5xl mx-auto m-8">
                        <h2 class="collectionTitle w-full my-2 text-[30px] md:text-[40px] lg:text-[50px] text-center p-8 lg:mt-8">
                            Subscribe and get more from us
                        </h2>
                        <div class="w-full mb-4">
                            <div
                                class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
                            ></div>
                        </div>

                        <div class="flex flex-wrap">
                            <div class=" sm:w-1/2 p-6">
                                <h3 class="font-mono text-center sm:text-left leading-normal text-gray-700 text-4xl mb-3">
                                    Become our member and get many benefits
                                </h3>
                                <p class="font-mono text-center sm:text-left leading-normal text-gray-500 text-[18px] lg:pb-8">
                                    By becoming our member, you will receive a discount, a monthly hotwheel physical model and many other benefits
                                </p>
                            </div>
                            <div class="w-full sm:w-1/2 p-6">
                                <img src={RacingImg}></img>
                            </div>
                        </div>

                        <div class="flex flex-wrap flex-col-reverse sm:flex-row">
                            <div class="w-full sm:w-1/2 pl-12 sm:ml-0 lg:p-6">
                                <img src={worldWidePng}></img>
                            </div>
                            <div class="w-full sm:w-1/2 p-6 mt-6">
                                <div class="align-middle">
                                    <h3 class="font-mono text-center sm:text-left leading-normal text-gray-700 text-4xl mb-3">
                                        Worldwide shipping
                                    </h3>
                                    <p class="font-mono text-center sm:text-left leading-normal text-gray-500 text-[18px] lg:pb-8">
                                        You don't have to worry about delivery, HotWheelsai ships worldwide and it's free<br /><br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="bg-white bg-opacity-70 py-8">
                    <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
                        <h2 class="collectionTitle w-full my-2 text-[30px] md:text-[40px] lg:text-[50px] text-center">
                            Pricing
                        </h2>
                        <div class="w-full mb-4">
                            <div
                                class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
                            ></div>
                        </div>

                        <div class="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
                            <div class="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-gray-100 mt-4">
                                <div class="flex-1 bg-gray-100 text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                                    <div class="font-mono text-center p-8 leading-normal text-gray-700 text-4xl mb-3 border-b-4">
                                        Basic
                                    </div>
                                    <ul class="w-full text-center text-lg font-mono text-gray-700 font-bold">
                                        <li class="border-b-2 py-4">Mainline Hotwheel</li>
                                        <li class="border-b-2 py-4">Monthly Discounts</li>
                                        <li class="border-b-2 py-4">5600 Credits</li>
                                    </ul>
                                </div>
                                <div class="flex-none mt-auto bg-gray-100 rounded-b rounded-t-none overflow-hidden shadow p-6">
                                    <div class="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                                        9.99€ <span class="text-base">/ Per Month</span>
                                    </div>
                                    <div class="flex items-center justify-center">
                                        <button class="mx-auto lg:mx-0 hover:underline gradient2 text-gray-800 font-bold rounded my-6 py-4 px-8 shadow-lg">
                                            Sign Up
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-gray-100 mt-4 sm:-mt-6 gradient shadow hover:shadow-lg z-10">
                                <div class="flex-1 rounded-t rounded-b-none overflow-hidden">
                                    <div class="font-mono text-center p-8 leading-normal text-gray-700 text-4xl mb-3">Medium</div>
                                    <ul class="w-full text-center text-lg font-mono text-gray-700 font-bold">
                                        <li class="border-b-2 border-orange-300 py-4">Treasure Hunt Hotwheel</li>
                                        <li class="border-b-2 border-orange-300 py-4">Mothly Discounts</li>
                                        <li class="border-b-2 border-orange-300 py-4">9200 Credits</li>
                                    </ul>
                                </div>
                                <div class="flex-none mt-auto rounded-b rounded-t-none overflow-hidden p-6">
                                    <div class="w-full pt-6 text-4xl font-bold text-center">
                                        15.99€ <span class="text-base">/ Per Month</span>
                                    </div>
                                    <div class="flex items-center justify-center">
                                        <button class="mx-auto lg:mx-0 hover:underline gradient2 text-gray-800 font-bold rounded my-6 py-4 px-8 shadow-lg">
                                            Sign Up
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-gray-100 mt-4">
                                <div class="flex-1 bg-gray-100 text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                                    <div class="font-mono text-center p-8 leading-normal text-gray-700 text-4xl mb-3 border-b-4">
                                        Pro
                                    </div>
                                    <ul class="w-full text-center text-lg font-mono text-gray-700 font-bold">
                                        <li class="border-b-2 py-4">Treasure Hunt Hotwheel</li>
                                        <li class="border-b-2 py-4">Mothly Discounts</li>
                                        <li class="border-b-2 py-4">14200 Credits</li>
                                    </ul>
                                </div>
                                <div class="flex-none mt-auto bg-gray-100 rounded-b rounded-t-none overflow-hidden shadow p-6">
                                    <div class="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                                        21.99€ <span class="text-base">/ Per Month</span>
                                    </div>
                                    <div class="flex items-center justify-center">
                                        <button class="mx-auto lg:mx-0 hover:underline gradient2 text-gray-800 font-bold rounded my-6 py-4 px-8 shadow-lg">
                                            Sign Up
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="bg-white bg-opacity-70 w-full mx-auto text-center pt-6 pb-12">
                    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div class="relative isolate overflow-hidden px-6 py-20 text-center sm:px-16 sm:shadow-sm dark:bg-transparent">
                            <p class=" collectionTitle w-full my-2 text-[30px] md:text-[40px] lg:text-[50px] text-center">
                                Do you have any questions?
                            </p>

                            <h3 class="font-mono text-center leading-normal text-gray-500 text-[25px] lg:pb-8">Ask and we will contact you soon</h3>
                            <form>
                                <div class="mx-auto mt-8 relative gradient min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl border-orange-100 focus-within:border-orange-800">
                                    <input id="search-bar" placeholder="Your Email" name="q" class="placeholder-gray-700 placeholder:font-mono px-6 py-2 w-full rounded-md flex-1 outline-none bg-gray-100 bg-opacity-50" required="" />
                                    <button type="submit" class="w-full md:w-auto px-6 py-3 bg-gray-100 border-orange-100 bg-opacity-20 text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all">
                                        <span class="flex items-center transition-all opacity-1">
                                            <span class="text-sm font-mono whitespace-nowrap truncate mx-auto">
                                                Submit
                                            </span>
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default HomeScreen