import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'
import { GameContext } from '../../store/game-context'
import { useNavigate } from 'react-router-dom'


const LoseModal = () => {

    const gameCtx = useContext(GameContext)
    const cancelButtonRef = useRef(null)
    const navigate = useNavigate()
    const [credits, setCredits] = useState(0);
    const [experience, setExperience] = useState(0);

    const closeModal = () => {
        gameCtx.closeModal()
        navigate("/gamescreen")
        setCredits(0)
        setExperience(0)
    }
    const restart = () => {
        gameCtx.setTimer()
        gameCtx.closeModal()
        setCredits(0)
        setExperience(0)
    }

    useEffect(() => {
        if (gameCtx.loseModal == true) {
            const interval = setInterval(() => {
                if (credits < gameCtx.lostMoney) {
                    setCredits(credits + 5);
                }
                if (experience < 20) {
                    setExperience(experience + 1);
                }
            }, 12); // Change the interval duration (in milliseconds) if needed

            return () => clearInterval(interval);
        }
    }, [credits, gameCtx.loseModal, experience]);


    return (
        <Transition.Root show={gameCtx.loseModal} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={gameCtx.closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto sm:ml-52">
                    <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="mt-3">
                                        <div className="mt-2">
                                            <p className="collectionTitle my-2 mx-5 text-[50px] sm:text-[70px] text-center">YOU LOST!!!</p>
                                            <div class="w-full mb-4">
                                                <div
                                                    class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
                                                ></div>
                                            </div>
                                            <div className='mx-5'>
                                                <p className='collectionTitle w-full mt-5 text-[25px] sm:text-[30px]'>Exp: +{experience}</p>
                                                <p className='collectionTitle w-full text-[25px] sm:text-[30px]'>Credits: -{credits}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 flex justify-center sm:px-6">
                                    <button onClick={closeModal} class="mx-2 fortnite-btn flex items-center justify-center h-[50px] w-32 md:w-100">
                                        <span class="fortnite-btn-inner p-2 pt-1 w-10/12 text-[20px] truncate">Close</span>
                                    </button>
                                    <button onClick={restart} class="mx-2 fortnite-btn flex items-center justify-center h-[50px] w-32 md:w-100">
                                        <span class="fortnite-btn-inner p-2 pt-1 w-10/12 text-[20px] truncate">Restart</span>
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>

    )
}
export default LoseModal