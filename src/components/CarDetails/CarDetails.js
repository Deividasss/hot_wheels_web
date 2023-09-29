import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CarDetails = ({ cars }) => {
    const { carId } = useParams();
    const car = cars[carId];
    window.scrollTo(0, 0)
    const navigate = useNavigate()
    return (
        <div className="mt-20 mb-10 sm:ml-52 animate__animated animate__fadeIn">
            <header className='md:mx-[13%] p-2 text-center'>
                <h2 className='text-[45px] sm:text-[60px] garageTitle'>{car.manufacturer}</h2>
                <h2 className='text-[35px] sm:text-[50px] garageTitle'>{car.model}</h2>
            </header>
            <hr className="mt-6 mb-8 m-auto bg-gray-300 rounded-sm p-[1px] w-[300px] sm:w-[800px]"></hr>
            <div>
                <div className="flex justify-center ">
                    <img className="w-[300px] sm:w-[500px]" src={car.image}></img>
                </div>
                <div className="flex justify-center w-full">
                    <div>
                        <p className="collectionTitle w-full mt-10 text-[30px] sm:text-[25px]">Description</p>
                        <hr className="mb-2 bg-gray-300 rounded-sm p-[1px] w-[300px] sm:w-[500px]"></hr>
                        <p className="font-mono w-[300px] sm:w-[500px] font-bold break-words leading-normal text-gray-600 sm:text-base mb-8">{car.description}</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="text-left w-[300px] sm:w-[500px]">
                        <p className="font-bold font-mono">Speed<div class="w-[100%] bg-gray-200 ">
                            <div class="levelBar text-xs font-medium p-[5px] text-blue-100 text-center p-0.5 leading-none " style={{ maxWidth: `${(car.speed)}px` }}></div>
                        </div></p>
                        <p className="font-bold font-mono">Handling<div class="w-[100%] bg-gray-200">
                            <div class="levelBar text-xs font-medium p-[5px] text-blue-100 text-center p-0.5 leading-none" style={{ maxWidth: `${(car.handling)}px` }}></div>
                        </div></p>
                        <p className="font-bold font-mono">Acceleration<div class="w-[100%] bg-gray-200">
                            <div class="levelBar text-xs font-medium p-[5px] text-blue-100 text-center p-0.5 leading-none" style={{ maxWidth: `${(car.acceleration)}px` }}></div>
                        </div></p>
                    </div>
                </div>
                <div className="sm:my-14 my-10 px-4 py-3 sm:px-6 flex justify-center">
                    <button onClick={()=>navigate("/myGarage")} class=" fortnite-btn flex items-center justify-center h-[60px] w-52">
                        <span class="fortnite-btn-inner p-1 pt-1 w-10/12 text-xl truncate">Back</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default CarDetails