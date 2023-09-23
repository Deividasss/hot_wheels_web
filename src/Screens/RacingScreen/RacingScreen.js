import { useContext } from 'react'
import { GameContext } from '../../store/game-context'


const RacingScreen = () => {

    const gameCtx = useContext(GameContext)

    return (
        <div>
            <p className='collectionTitle w-full my-2 text-[55px] sm:text-[90px] text-center animate__animated animate__pulse animate__slow animate__infinite'>Racing...</p>
            <div className="ms:flex justify-center mt-10 align-middle">
                <img className='w-[300px] h-[180px]' src={gameCtx.selectedCar.image}></img>
                <p className='collectionTitle my-2 mx-5 text-[55px] sm:text-[70px] text-center'>VS</p>
                <img className='w-[300px] h-[180px]' src={gameCtx.selectedCar.image}></img>
            </div>
            <div className='mt-10 mb-24'>
                <p className='collectionTitle w-full mt-10 text-[30px] md:text-[25px] lg:text-[40px] text-center'>Time Left: {gameCtx.countdown}</p>
                <div className=" flex justify-center">
                    <div class="w-[50%] bg-gray-200 rounded-full">
                        <div class="gradient text-xs font-medium text-blue-100 text-center p-3 leading-none rounded-full" style={{ width: `${(gameCtx.progress / 10) * 100}%` }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RacingScreen