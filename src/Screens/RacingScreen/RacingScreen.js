import { useContext } from 'react'
import { GameContext } from '../../store/game-context'


const RacingScreen = () => {

    const gameCtx = useContext(GameContext)

    return (
            <div>
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
            </div>
    )
}
export default RacingScreen