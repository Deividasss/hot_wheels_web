import { useContext, useState } from "react"
import { GameContext } from "../../store/game-context"
import "../UserInfoBar/UserInfoBar.scss"

const UserInfoBar = () => {

    const gameCtx = useContext(GameContext)

    return (
        <div>
            <h2>{gameCtx.money}</h2>
            <h2>{gameCtx.level}</h2>
            <div className=" flex justify-center">
                <p className="absolute" >Next Level {gameCtx.levelCount} / {Math.round(gameCtx.nextLevel)}</p>
                <div class="w-[90%] bg-gray-200 rounded-full">
                    <div class="bg-blue-600 text-xs font-medium p-[12px] text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: `${(gameCtx.levelCount / gameCtx.nextLevel) * 100}%` }}></div>
                </div>
            </div>
            {gameCtx.countdown !== null && gameCtx.countdown > 0 && (
                <div className=" flex justify-center">
                    <div class="w-[90%] bg-gray-200 rounded-full">
                        <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: `${(gameCtx.progress / 5) * 100}%` }}> 45%</div>
                    </div>
                </div>

            )}
            {!gameCtx.countdown && (
                <button onClick={() => gameCtx.setTimer()}>Timer</button>
            )}
        </div>

    )
}
export default UserInfoBar