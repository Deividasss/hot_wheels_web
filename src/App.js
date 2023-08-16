import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import GameScreen from './Screens/GameScreen/GameScreen';
import GameContextProvider from './store/game-context';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <GameContextProvider>
          <Header />
          <Routes>
            <Route>
              <Route exact path='/' element={<HomeScreen />} />
              <Route exact path='gamescreen' element={<GameScreen />} />
            </Route>
          </Routes>
          <Footer />
        </GameContextProvider>
      </Router >
    </>
  );
}

export default App;
