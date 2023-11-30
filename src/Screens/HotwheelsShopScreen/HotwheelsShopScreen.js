import { useState, useContext, useRef } from "react"
import DATA from "../../dataBases/CarShopData.json"
import { useNavigate } from "react-router-dom";
import "../HotwheelsShopScreen/HotwheelsShopScreen.scss"
import { ShopContext } from "../../store/shop-context";
import AlertModal from "../../components/Modals/AlertModal";
import { GameContext } from "../../store/game-context";
import BuyCarImg from "../../assets/img/buyCarImg.png"

const HotwheelsShopScreen = () => {

    const navigate = useNavigate()
    const gameCtx = useContext(GameContext)
    const shopCtx = useContext(ShopContext)
    const [selectedGroup, setSelectedGroup] = useState(null);
    const targetRef = useRef();
    const [message, setMessage] = useState('');

    const handleGroupClick = (group) => {
        shopCtx.setSelectedGroup(group);
        const xCoordinate = 0;
        const yCoordinate = 600;
        window.scrollTo({
            top: yCoordinate,
            left: xCoordinate,
            behavior: 'smooth',
        });
    };

    const clickHandler = (car) => {
        shopCtx.BuyCar(car)
        setMessage("Congratulations on your purchase");
        gameCtx.setAlertModal(true)

    }

    return (
        <div className="sm:ml-52">
            <header className='md:mx-[13%]'>
                <h2 className='text-[65px] text-center sm:text-[80px]'>Hotwheels Shop</h2>
            </header>
            <div className="car-groups my-16">
                <div className="text-center">
                    {!shopCtx.selectedGroup && (
                        < div className="text-center mb-5">
                            <p className="collectionTitle w-full mt-10 text-[30px] sm:text-[30px]">Please Select Categorie</p>
                        </div>
                    )}
                    {Object.keys(shopCtx.cars).map((group) => (
                        <div className="mt-[5%] flex justify-center">
                            <button key={group} onClick={() => handleGroupClick(group)} class=" fortnite-btn flex items-center justify-center h-[60px] w-50 md:w-100">
                                <span class="fortnite-btn-inner p-2 pt-3 w-12/12 text-2xl truncate">{group}</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <AlertModal message={message} image={BuyCarImg} />
            <div className="md:w-[80%] md:m-auto md:p-[20px] grid md:grid-cols-4 flex justify-center">
                {shopCtx.carShopInventory && shopCtx.carShopInventory.map((car) => (
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
                                <p>{car.price}</p>
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
                            <div className="sm:my-14  px-4 py-3 sm:px-6 flex justify-center">
                                <button onClick={() => clickHandler(car)} class=" fortnite-btn flex items-center justify-center h-[45px] w-52">
                                    <span class="fortnite-btn-inner p-1 pt-1 w-10/12 text-xl truncate">Buy</span>
                                </button>
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