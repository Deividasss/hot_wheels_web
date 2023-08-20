import CarsModal from "../MyGarageScreen/MyGarageScreen"
import GameModal from "../../components/Modals/GameModal"
import LoseModal from "../../components/Modals/LoseModal"
import WinModal from "../../components/Modals/WinModal"
import UserInfoBar from "../../components/UserInfoBar/UserInfoBar"
import { GameContext } from "../../store/game-context"
import { useContext, useState } from "react"
import "../GameScreen/GameScreen.scss"
import { Alert } from "react-bootstrap"
import AlertModal from "../../components/Modals/AlertModal"
import NoCarImg from "../../assets/img/noCar.png"
import 'animate.css';
import { Navigate, useNavigate } from "react-router-dom"
import RacingScreen from "../../components/RacingScreen/RacingScreen.js"

const GameScreen = () => {

    const gameCtx = useContext(GameContext)
    const [showGameModal, setShowGameModal] = useState(false)
    const [showCarsModal, setShowCarsModal] = useState(false)
    const [message, setMessage] = useState('');
    const navigate = useNavigate()
    window.scrollTo(0, 0)

    const closeModal = () => {
        setShowCarsModal(false)
        setShowGameModal(false)
    }

    const clickHandler = () => {
        if (!gameCtx.selectedCar) {
            setMessage(
                "To race, first select a car"
            );
            gameCtx.setAlertModal(true)
        } else {
            setShowGameModal(true)
        }
    }

    return (
        <div className="sm:ml-64 mt-5">
            <div className="grid grid-flow-row md:grid-flow-col animate__animated animate__backInDown">
                {!gameCtx.countdown && (
                    <>
                        <div className="md:m-8">
                            <div className="flex justify-center">
                                <div>
                                    {gameCtx.selectedCar.image ? (
                                        <img className="h-[200px] w-[330px] md:h-[300px] md:w-[490px]" src={gameCtx.selectedCar.image} alt="Car" />
                                    ) : (
                                        <img className="h-[200px] w-[330px] md:h-[300px] md:w-[490px]" src={NoCarImg} alt="Default" />
                                    )}
                                    <div>
                                        <p className="text-center font-bold text-[27px]">{gameCtx.selectedCar.manufacturer}</p>
                                        <p className="text-center font-normal text-[20px] leading-3">{gameCtx.selectedCar.model}</p>
                                    </div>
                                    <div className="mt-[10%] mb-[20px] flex justify-center">
                                        <button onClick={() => navigate("/mygarage")} class="fortnite-btn flex items-center justify-center h-[50px] w-[170px] md:w-[250px]">
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
                        <div className="mt-[10%] flex justify-center md:justify-start">
                            <button onClick={() => clickHandler()} class="animate__animated animate__bounce fortnite-btn flex items-center justify-center h-[85px] w-80 md:w-100">
                                <span class="fortnite-btn-inner p-2 pt-3 w-11/12 text-5xl truncate">Play</span>
                            </button>
                        </div>
                    </>
                )}
                <GameModal showGameModal={showGameModal} closeModal={closeModal} />
                <LoseModal />
                <WinModal />
                <AlertModal message={message} />
            </div>
            <div>
                {gameCtx.countdown !== null && gameCtx.countdown > 0 && (
                    <RacingScreen />
                )}
            </div>
        </div>
    )
}
export default GameScreen