import { useContext } from 'react'
import { GameContext } from '../../store/game-context'
import RacingScreen from '../RacingScreen/RacingScreen'
import LoseModal from '../../components/Modals/LoseModal'
import WinModal from '../../components/Modals/WinModal'
import { useNavigate } from 'react-router-dom'

const GameOptionsScreen = () => {
    const gameCtx = useContext(GameContext)
    const navigate = useNavigate()

    const dropdownOptions = [
        { label: 'Easy', value: 350 },
        { label: 'Normal', value: 600 },
        { label: 'Hard', value: 900 },
    ];
    const handleClick = () => {
        gameCtx.setTimer()
    }
    return (
        <div className="sm:ml-64 px-4 pb-4 pt-5 mt-20 sm:p-6 sm:pb-4">
            {!gameCtx.countdown && (
                <div>
                    <p className='collectionTitle w-full my-2 text-[30px] md:text-[40px] lg:text-[70px] text-center'>Please Select Difficulty</p>
                    {gameCtx.selectedDifficulty.value && (
                        <p className='collectionTitle w-full mt-10 text-[25px] md:text-[25px] lg:text-[40px] text-center'>Difficulty: {gameCtx.selectedDifficulty.label}</p>
                    )}
                    <div className='flex justify-center'>
                        {dropdownOptions.map((option) => (
                            <button key={option.value} onClick={() => { gameCtx.selectDificullty({ label: option.label, value: option.value }) }} class="mx-2 fortnite-btn flex items-center justify-center h-[50px] w-40 md:w-100">
                                <span class=" fortnite-btn-inner p-1 pt-1 w-10/12 text-2xl truncate">{option.label}</span>
                            </button>
                        ))}
                    </div>
                    <div className="my-24 px-4 py-3 sm:px-6 flex justify-center">
                        <button onClick={() => handleClick()} class=" fortnite-btn flex items-center justify-center h-[85px] w-80 md:w-100">
                            <span class="fortnite-btn-inner p-2 pt-3 w-11/12 text-5xl truncate">Start</span>
                        </button>
                    </div>
                </div>
            )}
            <LoseModal />
            <WinModal />
            <div>
                {gameCtx.countdown !== null && gameCtx.countdown > 0 && (
                    <RacingScreen />
                )}
            </div>
        </div>


    )
}
export default GameOptionsScreen