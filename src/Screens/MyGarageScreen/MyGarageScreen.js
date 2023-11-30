import { Fragment, useRef, useState, useMemo, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { GameContext } from '../../store/game-context'
import { ShopContext } from '../../store/shop-context'
import CARS_DATA from "../../dataBases/NewsData.json"
import { useNavigate } from 'react-router-dom'
import Pagination from '../../components/Pagination/Pagination'


const MyGarage = ({ cars }) => {

    const gameCtx = useContext(GameContext)
    const navigate = useNavigate()
    const [search, setSearch] = useState('')
    window.scrollTo(0, 0)
    const [currentPage, setCurrentPage] = useState(1);
    const shopCtx = useContext(ShopContext)
    const PageSize = 12;
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
      
        // Check if it's the initial render and currentPage is 1
        if (currentPage === 1 && shopCtx.garageCars.length > 0) {
          return shopCtx.garageCars.slice(0, PageSize);
        }
      
        return shopCtx.garageCars.slice(firstPageIndex, lastPageIndex);
      }, [currentPage, shopCtx.garageCars, PageSize]);

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <>
            <div className='animate__animated animate__fadeIn mt-5 sm:ml-52'>
                <header className='md:mx-[13%] text-center md:text-left'>
                    <h2 className='garageTitle'>MY GARAGE</h2>
                    <form className=' md:m-0 mx-12 mb-12'>
                        <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input onChange={handleChange} type="search" id="search" class=" outline-none md:focus:w-[50%] search md:w-[30%] block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-400 rounded-lg  " placeholder="Search" />
                        </div>
                    </form>
                </header>
                <hr className="mt-6 mb-8 m-auto bg-gray-300 rounded-sm p-[1px] w-[80%]"></hr>
                <div className="md:w-[80%] md:m-auto md:p-[20px] grid md:grid-cols-4 flex justify-center">
                {currentTableData.filter(cars => cars.manufacturer.toLowerCase().includes(search)).map((car, index) =>  (
                        <div >
                            <button
                                key={car.id}
                                onClick={() => navigate(`/car/${car.id}`)}
                                className='p-5 hover:scale-110 '
                            >
                                <div class=" max-w-[310px] bg-white border border-gray-200 rounded-lg shadow ">
                                    <img class="rounded-t-lg p-5" src={car.image} alt="car" />
                                    <hr></hr>
                                    <div class="p-3">
                                        <div>
                                            <p className="text-center font-bold text-[27px]">{car.manufacturer}</p>
                                            <p className="text-center font-normal text-[20px] leading-3">{car.model}</p>
                                        </div>
                                        <div className=" w-[100%]">
                                            <div className="text-left">
                                                <p className="font-bold font-mono">Speed<div class="w-[100%] bg-gray-200 ">
                                                    <div class="levelBar text-xs font-medium p-[5px] text-blue-100 text-center p-0.5 leading-none " style={{ maxWidth: `${(car.speed)}px` }}></div>
                                                </div></p>
                                                <p className="font-bold font-mono">Handling<div class="w-[100%] bg-gray-200">
                                                    <div class="levelBar text-xs font-medium p-[5px] text-blue-100 text-center p-0.5 leading-none" style={{ maxWidth: `${(car.handling)}px` }}></div>
                                                </div></p>
                                                <p className="font-bold font-mono">Acceleration<div class="w-[100%] bg-gray-200">
                                                    <div class="levelBar text-xs font-medium p-[5px] text-blue-100 text-center p-0.5 leading-none" style={{ maxWidth: `${(car.acceleration)}px` }}></div>
                                                </div></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    ))}
                    {/* {currentTableData.filter(cars => cars.manufacturer.toLowerCase().includes(search)).map((item, index) => (
                        <button
                            key={index}
                            onClick={() => navigate(`/car/${index}`)}
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
                    ))} */}
                </div>
                <div className='flex justify-center mt-[20px] mb-20'>
                    <Pagination
                        className="pagination-bar"
                        totalCount={shopCtx.garageCars.length}
                        currentPage={currentPage}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />
                </div>
            </div>
        </>

    )
}
export default MyGarage