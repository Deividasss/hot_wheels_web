import { useContext } from 'react'
import { GameContext } from '../../store/game-context'


const RacingScreen = () => {

    const gameCtx = useContext(GameContext)

    return (
        <div>
            <p className='collectionTitle w-full text-[75px] sm:text-[90px] text-center animate__animated animate__pulse animate__slow animate__infinite'>Racing...</p>
            <div className='mb-16'>
                <p className='collectionTitle w-full mt-10 text-[30px] md:text-[25px] lg:text-[40px] text-center'>Time Left: {gameCtx.countdown}</p>
                <div className=" flex justify-center">
                    <div class=" w-[80%] sm:w-[50%] bg-gray-200 rounded-full">
                        <div class="gradient text-xs font-medium text-blue-100 text-center p-3 leading-none rounded-full" style={{ width: `${(gameCtx.progress / 5) * 100}%` }}></div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mb-20">
                <div>
                    <img className='w-[100px] m-auto h-[65px] sm:w-[300px] sm:h-[180px]' src={gameCtx.selectedCar.image}></img>
                    <p className='collectionTitle my-2 mx-5 text-[25px] sm:text-[35px] text-center'>Deividas</p>
                </div>
                <p className='collectionTitle my-2 mx-5 text-[40px] sm:text-[70px] text-center'>VS</p>
                <div>
                    <img className='w-[100px] m-auto h-[65px] sm:w-[300px] sm:h-[180px]' src={gameCtx.selectedCar.image}></img>
                    <p className='collectionTitle my-2 mx-5 text-[25px] sm:text-[35px] text-center'>Deividas</p>
                </div>
            </div>
        </div>
    )
}
export default RacingScreen