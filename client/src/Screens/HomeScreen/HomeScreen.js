import { Alert } from "react-bootstrap"
import "../HomeScreen/HomeScreen.scss"
import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const HomeScreen = () => {

    const [imput, setimput] = useState({
        'UserName': '',
        'Password': ''
    })
    const [user, setUser] = useState()
    const navigate = useNavigate()
    const [showErrorMessage, setshowErrorMessage] = useState({
        'message': '',
        'status': "",
    })

    console.log(user)

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

                navigate("gateway",{state: response.data.token})
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

        <div className="container w-max-[100%]  bg-banner h-[45vh] bg-no-repeat  bg-cover bg-center rounded-b-[350px] flex justify-center">
            <div className="mt-[6%]">
                <p class="text-[60px]  uppercase font-bold">Radio-Code.lt</p>
                <form onSubmit={handleSubmit}>
                    <span className="z-10 leading-snug font-normal absolute text-center text-gray-400 bg-transparent rounded text-base items-center justify-center w-10 pl-3 py-3">
                        <i className="fa-solid fa-radio fa-lg"></i>
                    </span>
                    <input
                        type="text"
                        name="UserName"
                        required
                        onChange={handleChange}
                        className="form-input border outline-1 outline-gray-400 py-3 placeholder-gray-400 text-gray-700 relative rounded text-sm  w-full pl-10" placeholder="Write radio co" />
                    <input
                        type="text"
                        name="Password"
                        required
                        onChange={handleChange}
                        className="form-input border outline-1 outline-gray-400 py-3 placeholder-gray-400 text-gray-700 relative rounded text-sm  w-full pl-10" placeholder="Write radio co" />
                    {showErrorMessage.message && (<Alert variant={showErrorMessage.status}>{showErrorMessage.message}</Alert>)}

                    <button type="submit" className="bg-green-500 shadow-xl hover:bg-green-400 text-white font-bold rounded-full p-2 w-full text-center mt-3">SUBMIT</button>
                </form>
            </div>
        </div>
    )
}
export default HomeScreen