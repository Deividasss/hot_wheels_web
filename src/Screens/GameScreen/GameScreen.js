import CarsModal from "../../components/Modals/CarsModal"
import GameModal from "../../components/Modals/GameModal"
import LoseModal from "../../components/Modals/LoseModal"
import WinModal from "../../components/Modals/WinModal"
import UserInfoBar from "../../components/UserInfoBar/UserInfoBar"
import { GameContext } from "../../store/game-context"
import { useContext, useState } from "react"

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
            <div className="grid mt-[15%] place-items-center">
                {gameCtx.countdown !== null && gameCtx.countdown > 0 && (
                    <div className=" flex justify-center">
                        <div class="w-[100%] bg-gray-200 rounded-full">
                            <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: `${(gameCtx.progress / 5) * 100}%` }}> 45%</div>
                        </div>
                    </div>

                )}
                {gameCtx.selectedCar && (
                    <>
                        <img style={{ height: 120, width: 180 }} src={gameCtx.selectedCar.image} />
                        <p>Speed: {gameCtx.selectedCar.speed}</p>
                        <p>Name: {gameCtx.selectedCar.model}</p>

                    </>
                )}
                {!gameCtx.countdown && (
                    <button onClick={() => setShowCarsModal(true)}>Select Car</button>
                )}
                {!gameCtx.countdown && (
                    <button onClick={() => setShowGameModal(true)}>Start</button>
                )}
                <GameModal showGameModal={showGameModal} closeModal={closeModal} />
                <LoseModal />
                <WinModal />
                <CarsModal showCarsModal={showCarsModal} closeModal={closeModal} />
            </div>
        </div>
    )
}
export default GameScreen