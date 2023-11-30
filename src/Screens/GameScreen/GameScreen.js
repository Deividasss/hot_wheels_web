import GameModal from "../../components/Modals/GameModal"
import { GameContext } from "../../store/game-context"
import { useContext, useState } from "react"
import "../GameScreen/GameScreen.scss"
import AlertModal from "../../components/Modals/AlertModal"
import NoCarImg from "../../assets/img/noCar.png"
import 'animate.css';
import { Navigate, useNavigate } from "react-router-dom"
import RacingScreen from "../RacingScreen/RacingScreen.js"
import USERS from "../../dataBases/Users.json"
import SelectCarPng from "../../assets/img/selectCar.png"

const GameScreen = () => {

    const gameCtx = useContext(GameContext)
    const [showGameModal, setShowGameModal] = useState(false)
    const [showCarsModal, setShowCarsModal] = useState(false)
    const [message, setMessage] = useState('');
    const navigate = useNavigate()
    const sortedUsers = USERS.users.sort((a, b) => b.level - a.level);
    window.scrollTo(0, 0)

    const closeModal = () => {
        setShowCarsModal(false)
        setShowGameModal(false)
    }

    const clickHandler = () => {
        if (!gameCtx.selectedCar) {
            setMessage(
                "To Race, First Select A Car"
            );
            gameCtx.setAlertModal(true)
        } else {
            navigate("/gameOptions")
        }
    }

    return (
        <div className="sm:ml-52 animate__animated animate__fadeIn">
            <header className='md:mx-[13%]'>
                <h2 className='text-[65px] text-center sm:text-[80px]'>HOTWHEELS RACING</h2>
            </header>
            <div className="mt-20">
                {!gameCtx.countdown && (
                    <>
                        <div className="md:m-8">
                            <div className="flex justify-center">
                                <div>
                                    {gameCtx.selectedCar.image ? (
                                        <img className="animate__animated animate__bounce h-[200px] w-[330px] md:h-[300px] md:w-[490px]" src={gameCtx.selectedCar.image} alt="Car" />
                                    ) : (
                                        <img className="animate__animated animate__bounce h-[200px] w-[330px] md:h-[300px] md:w-[490px]" src={NoCarImg} alt="Default" />
                                    )}
                                    <div>
                                        <p className="text-center text-gray-700 font-mono font-bold text-[35px]">{gameCtx.selectedCar.manufacturer}</p>
                                        <p className="text-center text-gray-600 font-mono text-[25px] leading-3">{gameCtx.selectedCar.model}</p>
                                    </div>
                                    <div className="mt-[10%] mb-[20px] flex justify-center">
                                        <button onClick={() => navigate("/selectCar")} class="fortnite-btn flex items-center justify-center h-[50px] w-[170px] md:w-[250px]">
                                            <span class="fortnite-btn-inner p-1 pt-1 w-11/12 text-2xl truncate">Select Car</span>
                                        </button>
                                    </div>
                                    <div className="bg-zinc-300 p-[1px]"></div>
                                    <div className="flex justify-center w-[100%]">
                                        <div className="mt-4">
                                            <p className="font-bold font-mono">Speed <span className="  ml-[50px] font-normal"><div class="w-[300px] bg-gray-200">
                                                <div class="levelBar text-xs font-medium p-[5px] text-blue-100 text-center p-0.5 leading-none " style={{ width: `${(gameCtx.selectedCar.speed)}px` }}></div>
                                            </div></span></p>
                                            <p className="font-bold font-mono">Handling <span className="ml-[50px] font-normal"><div class="w-[300px] bg-gray-200">
                                                <div class="levelBar text-xs font-medium p-[5px] text-blue-100 text-center p-0.5 leading-none" style={{ width: `${(gameCtx.selectedCar.handling)}px` }}></div>
                                            </div></span></p>
                                            <p className="font-bold font-mono">Acceleration <span className="ml-[50px] font-normal"><div class="w-[300px] bg-gray-200">
                                                <div class="levelBar text-xs font-medium p-[5px] text-blue-100 text-center p-0.5 leading-none" style={{ width: `${(gameCtx.selectedCar.acceleration)}px` }}></div>
                                            </div></span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[5%] flex justify-center">
                            <button onClick={() => clickHandler()} class=" fortnite-btn flex items-center justify-center h-[85px] w-80 md:w-100">
                                <span class="fortnite-btn-inner p-2 pt-3 w-11/12 text-5xl truncate">Play</span>
                            </button>
                        </div>
                    </>
                )}
                <GameModal showGameModal={showGameModal} closeModal={closeModal} />
                <AlertModal message={message} image={SelectCarPng} />
            </div>
            {!gameCtx.countdown && (
                <div className="m-auto p-2 my-20 w-1/1 sm:w-1/2">
                    <p className="collectionTitle w-full my-2 text-[30px] md:text-[40px] lg:text-[50px] text-center">Top Players</p>
                    <div style={{ maxHeight: '420px', overflowY: 'auto' }}>
                        {sortedUsers.map((item, index) => (
                            <div className="p-2 flex m-2 rounded-lg gradient opacity-80 border-orange-800 border-2 ">
                                <p className="my-auto mx-3 text-3xl text-gray-100 font-mono font-bold">{index + 1}</p>
                                <img src={item.image} className="w-[50px]"></img>
                                <div className="flex my-auto ml-2">
                                    <p className="bg-orange-900 text-gray-100 text-xl py-1 px-4 rounded-xl font-mono font-bold">{item.level}</p>
                                    <p className="my-auto ml-4 sm:ml-10 text-gray-100 text-lg font-mono font-bold">{item.name}</p>
                                    <p className="my-auto ml-4 sm:ml-10 text-gray-100 text-lg font-mono font-bold">${item.credits}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <div>
                {gameCtx.countdown !== null && gameCtx.countdown > 0 && (
                    <RacingScreen />
                )}
            </div>
        </div>
    )
}
export default GameScreen