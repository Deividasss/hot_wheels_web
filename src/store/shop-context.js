import { createContext, useEffect, useState } from 'react';
import CAR_DATA from "../dataBases/CarShopData.json"

export const ShopContext = createContext({
    money: '',
    garageCars: [],
    selectedGroup: [],
    carShopInventory: [],
    cars: [],
    BuyCar: () => { },
    setSelectedGroup: ()=>{}
   
});

function ShopContextProvider({ children }) {
    const [money, setMoney] = useState(500)
    const [garageCars, setGarageCars] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [cars, setCars] = useState(CAR_DATA);
    const [carShopInventory, setCarShopInventory] = useState([]);

    useEffect(() => {
        setCarShopInventory(CAR_DATA[selectedGroup]);
      }, [selectedGroup]);


    const handleBuyCar = (car) => {
        setGarageCars((prevGarageCars) => {
          const updatedGarageCars = [...prevGarageCars, car];
          localStorage.setItem('garageCars', JSON.stringify(updatedGarageCars));
          return updatedGarageCars;
        });
      };

    useEffect(() => {
        const savedGarageCars = JSON.parse(localStorage.getItem('garageCars')) || [];
        setGarageCars(savedGarageCars);
      }, []);

    const value = {
        money: money,
        garageCars: garageCars,
        selectedGroup: selectedGroup,
        carShopInventory: carShopInventory,
        cars: cars,
        BuyCar: handleBuyCar,
        setSelectedGroup: setSelectedGroup
    };

    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export default ShopContextProvider;