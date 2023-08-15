import { useContext, useState } from "react"
import { GameContext } from "../../store/game-context"
import "../UserInfoBar/UserInfoBar.scss"

const UserInfoBar = () => {

    const gameCtx = useContext(GameContext)

    return (
        <div>
            <div className=" flex justify-center">
                <p className="absolute" >Next Level {gameCtx.levelCount} / {Math.round(gameCtx.nextLevel)}</p>
                <div class="w-[90%] bg-gray-200 rounded-b-lg">
                    <div class="bg-blue-600 text-xs font-medium p-[12px] text-blue-100 text-center p-0.5 leading-none rounded-bl-lg" style={{ width: `${(gameCtx.levelCount / gameCtx.nextLevel) * 100}%` }}></div>
                </div>
            </div>
        </div>

    )
}
export default UserInfoBar