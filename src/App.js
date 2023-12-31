import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import GameScreen from './Screens/GameScreen/GameScreen';
import GameContextProvider from './store/game-context';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import GameOptionsScreen from './Screens/GameOptionsScreen/GameOptionsScreen';
import SelectCarScreen from './Screens/SelectCarScreen/SelectCarScreen';
import MyGarage from './Screens/MyGarageScreen/MyGarageScreen';
import CARS_DATA from './dataBases/NewsData.json'
import CarDetails from './components/CarDetails/CarDetails';
import HotwheelsShopScreen from './Screens/HotwheelsShopScreen/HotwheelsShopScreen';
import ShopContextProvider from './store/shop-context';

function App() {
  return (
    <>
      <Router>
        <ShopContextProvider>
          <GameContextProvider>
            <Header />
            <Routes>
              <Route>
                <Route exact path='/' element={<HomeScreen />} />
                <Route exact path='gamescreen' element={<GameScreen />} />
                <Route exact path='selectCar' element={<SelectCarScreen />} />
                <Route exact path='gameOptions' element={<GameOptionsScreen />} />
                <Route exact path='myGarage' element={<MyGarage />} />
                <Route exact path='/car/:id' element={<CarDetails />} />
                <Route exact path='hotWheelsShop' element={<HotwheelsShopScreen />} />
              </Route>
            </Routes>
            <Footer />
          </GameContextProvider>
        </ShopContextProvider>
      </Router >
    </>
  );
}

export default App;
