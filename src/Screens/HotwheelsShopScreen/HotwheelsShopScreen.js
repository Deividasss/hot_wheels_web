import { useState } from "react"
import DATA from "../../dataBases/CarShopData.json"
import { useNavigate } from "react-router-dom";
import "../HotwheelsShopScreen/HotwheelsShopScreen.scss"

const HotwheelsShopScreen = () => {

    const [selectedGroup, setSelectedGroup] = useState(null);
    const navigate = useNavigate()

    const handleGroupClick = (group) => {
        setSelectedGroup(group);
    };

    return (
        <div className="sm:ml-52">
            <header className='md:mx-[13%]'>
                <h2 className='text-[65px] text-center sm:text-[80px]'>Hotwheels Shop</h2>
            </header>
            <div className="car-groups my-16">
                <div className="text-center">
                    {!selectedGroup && (
                        < div className="text-center mb-5">
                            <p className="collectionTitle w-full mt-10 text-[30px] sm:text-[30px]">Please Select Categorie</p>
                        </div>
                    )}
                    {Object.keys(DATA).map((group) => (
                        <button
                            key={group}
                            onClick={() => handleGroupClick(group)}
                            className={selectedGroup === group ? 'active' : 'gradient font-mono font-bold '}
                        >
                            {group}
                        </button>
                    ))}
                </div>
            </div>
            <div className="md:w-[80%] md:m-auto md:p-[20px] grid md:grid-cols-4 flex justify-center">
                {selectedGroup && DATA[selectedGroup].map((car) => (
                    <button
                        key={car.id}
                        className='p-5 hover:scale-110 '
                    >
                        <div class=" max-w-[310px] bg-white border border-gray-200 rounded-lg shadow ">
                            <img class="rounded-t-lg p-5" src={car.image} alt="car" />
                            <hr></hr>
                            <div class="p-3">
                                <div>
                                    <p className="text-center font-bold text-[27px]">{car.manufacturer}</p>
                                    <p className="text-center font-normal text-[20px] leading-3">{car.model}</p>
                                </div>
                                <div className=" w-[100%]">
                                    <div className="text-left">
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
                            </div>
                        </div>
                    </button>
                ))
                }
            </div>
        </div >
    )
}
export default HotwheelsShopScreen