import { useContext, useState } from "react"
import { GameContext } from "../../store/game-context"
import "../UserInfoBar/UserInfoBar.scss"

const UserInfoBar = () => {

    const gameCtx = useContext(GameContext)

    return (
        <>
            <div>
                <div className="flex justify-center">
                    <div className="w-[85%]">
                        <p className="absolute nextLevel font-medium ml-2" >Next Level {gameCtx.levelCount} / {Math.round(gameCtx.nextLevel)}</p>
                        <div class="bg-[#eeeee4] rounded-b-lg">
                            <div class="levelBar rounded-b-lg text-xs font-medium p-[13px] text-blue-100 text-center leading-none " style={{ width: `${(gameCtx.levelCount / gameCtx.nextLevel) * 100}%` }}></div>
                        </div>
                        <div className="flex moneyBar mt-2">
                            <p className="level text-gray-700 text-[40px]">{gameCtx.level}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 mt-5 ml-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-[18px] mt-5 text-gray-700">{gameCtx.money}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}
export default UserInfoBar