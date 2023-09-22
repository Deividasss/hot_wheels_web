import { useContext } from 'react'
import { GameContext } from '../../store/game-context'
import RacingScreen from '../RacingScreen/RacingScreen'
import LoseModal from '../../components/Modals/LoseModal'
import WinModal from '../../components/Modals/WinModal'

const GameOptionsScreen = () => {
    const gameCtx = useContext(GameContext)

    console.log(gameCtx.selectedDifficulty)
    const dropdownOptions = [
        { label: 'Easy', value: 350 },
        { label: 'Normal', value: 600 },
        { label: 'Hard', value: 900 },
    ];
    const handleClick = () => {
        gameCtx.setTimer()
    }
    return (
        <div className="sm:ml-64 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            {!gameCtx.countdown && (
                <div>
                    <p>Please Select Dificullty</p>
                    {dropdownOptions.map((option) => (
                        <button
                            key={option.value}
                            onClick={() => {
                                gameCtx.selectDificullty(option.value);
                            }}
                        >
                            <p className="text-black">{option.label}</p>
                        </button>
                    ))}
                    <div className="bg-gray-50 px-4 py-3 sm:px-6">
                        <button
                            type="button"
                            className="mt-2 w-full justify-center rounded-md bg-red-600 px-3 py-5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 "
                            onClick={() => handleClick()}
                        >
                            START RACES!
                        </button>
                    </div>
                </div>
            )}
            <LoseModal/>
            <WinModal/>
            <div>
                {gameCtx.countdown !== null && gameCtx.countdown > 0 && (
                    <RacingScreen />
                )}
            </div>
        </div>


    )
}
export default GameOptionsScreen