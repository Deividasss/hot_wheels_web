import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'
import { GameContext } from '../../store/game-context'
import CARS_DATA from "../../dataBases/NewsData.json"


const CarsModal = ({ showCarsModal, closeModal }) => {

    const gameCtx = useContext(GameContext)
    const cancelButtonRef = useRef(null)

    const handleClick = () => {
        closeModal()
    }

    return (
        <Transition.Root show={showCarsModal} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={closeModal}>
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

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-12 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-[20px]  ">
                                    {CARS_DATA.cars.map((item) => (
                                        <button
                                            key={item.value}
                                            onClick={() => { gameCtx.setSelectedCar(item); closeModal() }}
                                            className='p-5'
                                        >
                                            <img className='h-[100px]' src={item.image} />
                                            <p>{item.model}</p>
                                            <p>{item.speed}</p>
                                        </button>
                                    ))}
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                        onClick={() => closeModal()}
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
export default CarsModal