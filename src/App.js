import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import GameScreen from './Screens/GameScreen/GameScreen';
import UserInfoBar from './components/UserInfoBar/UserInfoBar';
import GameContextProvider from './store/game-context';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Router>
        <GameContextProvider>
          <Header />
          <UserInfoBar />
          <Routes>
            <Route>
              <Route exact path='/' element={<GameScreen />} />
              <Route exact path='homescreen' element={<HomeScreen />} />
            </Route>
          </Routes>
        </GameContextProvider>
      </Router >
    </>
  );
}

export default App;
