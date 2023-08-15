import GameModal from "../../components/Modals/GameModal"
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
            <h1>{gameCtx.level}</h1>
            <h1>{gameCtx.money}</h1>
            {gameCtx.countdown !== null && gameCtx.countdown > 0 && (
                <div className=" flex justify-center">
                    <div class="w-[90%] bg-gray-200 rounded-full">
                        <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: `${(gameCtx.progress / 5) * 100}%` }}> 45%</div>
                    </div>
                </div>

            )}
            {!gameCtx.countdown && (
                <button onClick={() => setShowGameModal(true)}>Start</button>
            )}
            <GameModal showGameModal={showGameModal} closeModal={closeModal}/>
        </div>
    )
}
export default GameScreen