import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'
import { GameContext } from '../../store/game-context'
import SelectCarPng from "../../assets/img/selectCar.png"

const AlertModal = ({ message, openAlert, image }) => {

    const gameCtx = useContext(GameContext)
    const cancelButtonRef = useRef(null)
    return (
        <Transition.Root show={gameCtx.alertModal} as={Fragment}>
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
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 ">
                                        <div className="mt-2 ">
                                            <img className='animate__animated animate__pulse animate__infinite mx-auto p-5 w-52' src={image}></img>
                                            <p className="text-[20px] text-gray-700 sm:text-[30px] font-mono font-bold text-black">
                                                {message}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 w-full">
                                    <button
                                        type="button"
                                        className="w-full justify-center rounded-md bg-orange-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-600  sm:w-[100%]"
                                        onClick={gameCtx.closeModal}
                                    >
                                        Close
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
export default AlertModal