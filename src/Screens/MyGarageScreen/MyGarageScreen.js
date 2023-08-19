import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'
import { GameContext } from '../../store/game-context'
import CARS_DATA from "../../dataBases/NewsData.json"
import { useNavigate } from 'react-router-dom'
import Pagination from '../../components/Pagination/Pagination'


const MyGarage = () => {

    const gameCtx = useContext(GameContext)
    const navigate = useNavigate()
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentItems = CARS_DATA.cars.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    window.scrollTo(0, 0)

    return (
        <>
            <div className="md:w-[80%] md:m-auto md:p-[20px] grid md:grid-cols-4 flex justify-center animate__animated animate__fadeInDown ">
                {currentItems.map((item) => (
                    <button
                        key={item.value}
                        onClick={() => { gameCtx.setSelectedCar(item); navigate("/gamescreen") }}
                        className='p-5 hover:scale-110 '
                    >
                        <div class=" max-w-[310px] bg-white border border-gray-200 rounded-lg shadow ">
                            <img class="rounded-t-lg p-5" src={item.image} alt="car" />
                            <hr></hr>
                            <div class="p-3">
                                <div>
                                    <p className="text-center font-bold text-[27px]">{item.manufacturer}</p>
                                    <p className="text-center font-normal text-[20px] leading-3">{item.model}</p>
                                </div>
                                <div className=" w-[100%]">
                                    <div className="text-left">
                                        <p className="font-bold font-mono">Speed<div class="w-[100%] bg-gray-200 ">
                                            <div class="levelBar text-xs font-medium p-[5px] text-blue-100 text-center p-0.5 leading-none " style={{ maxWidth: `${(item.speed)}px` }}></div>
                                        </div></p>
                                        <p className="font-bold font-mono">Handling<div class="w-[100%] bg-gray-200">
                                            <div class="levelBar text-xs font-medium p-[5px] text-blue-100 text-center p-0.5 leading-none" style={{ maxWidth: `${(item.handling)}px` }}></div>
                                        </div></p>
                                        <p className="font-bold font-mono">Acceleration<div class="w-[100%] bg-gray-200">
                                            <div class="levelBar text-xs font-medium p-[5px] text-blue-100 text-center p-0.5 leading-none" style={{ maxWidth: `${(item.acceleration)}px` }}></div>
                                        </div></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={CARS_DATA.cars.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </>

    )
}
export default MyGarage