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
                            <div className="flex justify-center">
                                <div>
                                    {gameCtx.selectedCar.image ? (
                                        <img className="h-[200px] w-[330px] md:h-[300px] md:w-[490px]" src={gameCtx.selectedCar.image} alt="Car" />
                                    ) : (
                                        <img style={{ height: 280, width: 460 }} src="https://evhub-t3-dev.hyundaidrive.com/img/no-results-car-electrified.webp" alt="Default" />
                                    )}
                                    <div className="mt-[10%] mb-[20px] flex justify-center">
                                        <button onClick={() => setShowCarsModal(true)} class="fortnite-btn flex items-center justify-center h-[50px] w-[170px] md:w-[200px]">
                                            <span class="fortnite-btn-inner p-1 pt-1 w-11/12 text-2xl truncate">Select Car</span>
                                        </button>
                                    </div>
                                    <div className="bg-zinc-300 p-[1px]"></div>
                                    <div className="flex justify-center">
                                        <div className="mt-4">
                                            <p className="font-bold">Speed: <span className=" float-right ml-[150px] font-normal">{gameCtx.selectedCar.speed} km/h</span></p>
                                            <div className="bg-zinc-500 p-[1px]"></div>
                                            <p className="font-bold">Model: <span className=" float-right ml-[50px] font-normal">{gameCtx.selectedCar.model}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[10%] flex justify-center md:justify-start">
                            <button onClick={() => setShowGameModal(true)} class="fortnite-btn flex items-center justify-center h-[85px] w-80 md:w-100">
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