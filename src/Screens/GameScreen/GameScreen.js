import CarsModal from "../../components/Modals/CarsModal"
import GameModal from "../../components/Modals/GameModal"
import LoseModal from "../../components/Modals/LoseModal"
import WinModal from "../../components/Modals/WinModal"
import UserInfoBar from "../../components/UserInfoBar/UserInfoBar"
import { GameContext } from "../../store/game-context"
import { useContext, useState } from "react"
import "../GameScreen/GameScreen.scss"


const GameScreen = () => {

    const gameCtx = useContext(GameContext)
    const [showGameModal, setShowGameModal] = useState(false)
    const [showCarsModal, setShowCarsModal] = useState(false)

    const closeModal = () => {
        setShowCarsModal(false)
        setShowGameModal(false)
    }

    return (
        <div>
            <div className="grid grid-flow-row md:grid-flow-col mt-[2%]">
                {!gameCtx.countdown && (
                    <>
                        <div className="m-8">
                            <div className=" justify-center flex">
                                {gameCtx.selectedCar.image ? (
                                    <img style={{ height: 300, width: 470 }} src={gameCtx.selectedCar.image} alt="Car" />
                                ) : (
                                    <img style={{ height: 300, width: 470 }} src="https://evhub-t3-dev.hyundaidrive.com/img/no-results-car-electrified.webp" alt="Default" />
                                )}
                            </div>
                            <div className="bg-zinc-300 p-[1px]"></div>
                            <div className="flex justify-center">
                                <div className="mt-4">
                                    <p className="font-bold">Speed: <span className=" float-right ml-[150px] font-normal">{gameCtx.selectedCar.speed} km/h</span></p>
                                    <div className="bg-zinc-500 p-[1px]"></div>
                                    <p className="font-bold">Name: <span className=" float-right ml-[50px] font-normal">{gameCtx.selectedCar.model}</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[10%]">
                            <div onClick={() => setShowCarsModal(true)} class=" h-16 w-64 flex justify-center items-center">
                                <div class="i h-10 w-40 bg-gradient-to-br from-yellow-400 to-yellow-600 items-center rounded-full shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
                                <a class="text-center text-white font-semibold z-10 pointer-events-none">Select Car</a>
                            </div>
                            <button onClick={() => setShowGameModal(true)} class="fortnite-btn flex items-center justify-center h-[85px] w-64">
                                <span class="fortnite-btn-inner p-2 pt-3 w-11/12 text-5xl truncate">Play</span>
                            </button>
                        </div>
                    </>
                )}

                <GameModal showGameModal={showGameModal} closeModal={closeModal} />
                <LoseModal />
                <WinModal />
                <CarsModal showCarsModal={showCarsModal} closeModal={closeModal} />
            </div>
            <div>
                {gameCtx.countdown !== null && gameCtx.countdown > 0 && (
                    <>
                        <div className="flex justify-center align-middle">
                            <img style={{ height: 120, width: 180 }} src={gameCtx.selectedCar.image}></img>
                            <p>VS</p>
                            <img style={{ height: 120, width: 180 }} src={gameCtx.selectedCar.image}></img>
                        </div>
                        <div className=" flex justify-center">
                            <div class="w-[50%] bg-gray-200 rounded-full">
                                <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: `${(gameCtx.progress / 5) * 100}%` }}> 45%</div>
                            </div>
                        </div>
                    </>

                )}
            </div>
        </div>
    )
}
export default GameScreen