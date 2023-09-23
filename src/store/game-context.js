import { createContext, useEffect, useState } from 'react';

export const GameContext = createContext({
    money: '',
    nextLevel: '',
    levelCount: '',
    progress: '',
    countdown: '',
    level: '',
    selectedDifficulty: '',
    oponentSpeed: '',
    alertModal: false,
    selectedCar: [],
    setTimer: () => { },
    selectDificullty: (value) => { },
    closeModal: () => { },
    setSelectedCar: () => { },
    setAlertModal: () => { }
});

function GameContextProvider({ children }) {
    const [randomNumber, setRandomNumber] = useState(null);
    const [money, setMoney] = useState(200)
    const [level, setLevel] = useState(1)
    const [levelCount, setLevelCount] = useState(0)
    const [nextLevel, setNextLevel] = useState(200)
    const [showWinModal, setShowWinModal] = useState(false);
    const [showLoseModal, setShowLoseModal] = useState(false);
    const [showAlertModal, setShowAlertModal] = useState(false);
    const [countdown, setCountdown] = useState(null);
    const [progress, setProgress] = useState(0);
    const [selectedDifficulty, setSelectedDifficulty] = useState([{value: 0, label: ''}]);
    const [selectedCar, setSelectedCar] = useState("");
    const carTotal = selectedCar.speed + selectedCar.handling + selectedCar.acceleration

    const setTimer = () => {
        setCountdown(10)
    }
    const selectDificullty = (value, label) => {
        setSelectedDifficulty(value, label)
    }
    const closeModal = () => {
        setShowWinModal(false)
        setShowLoseModal(false)
        setShowAlertModal(false)
    }

    useEffect(() => {
        if (countdown !== null) {
            const interval = setInterval(() => {
                setCountdown((prevCountdown) => prevCountdown - 1);
                setProgress((prevProgress) => prevProgress + 1);
            }, 1000);

            if (countdown === 0) {
                clearInterval(interval);
                const min = selectedDifficulty.value - Math.floor(Math.random() * (200 - 1) + 100);
                const max = selectedDifficulty.value;
                const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
                setRandomNumber(randomNum);

                if (carTotal > randomNum) {
                    if (selectedDifficulty.value === 350) {
                        setMoney((prevMoney) => prevMoney + 50);
                    } else if (selectedDifficulty.value === 600) {
                        setMoney((prevMoney) => prevMoney + 200);
                    } else {
                        setMoney((prevMoney) => prevMoney + 350);
                    }
                    setLevelCount((prevLevel) => prevLevel + 40);
                    setShowWinModal(true)
                } else {
                    setMoney((prevMoney) => prevMoney - 10);
                    setLevelCount((prevLevel) => prevLevel + 20);
                    setShowLoseModal(true)
                }

                if (levelCount >= nextLevel) {
                    setLevel((prevLeve) => prevLeve + 1);
                    setLevelCount(0);
                    setNextLevel((prevLVL) => prevLVL * 1.2)
                }
                setProgress(0);
            }

            return () => clearInterval(interval);
        }
    }, [countdown]);


    const value = {
        money: money,
        nextLevel: nextLevel,
        levelCount: levelCount,
        progress: progress,
        countdown: countdown,
        level: level,
        selectedDifficulty: selectedDifficulty,
        oponentSpeed: randomNumber,
        winModal: showWinModal,
        loseModal: showLoseModal,
        alertModal: showAlertModal,
        selectedCar: selectedCar,
        setTimer: setTimer,
        selectDificullty: selectDificullty,
        closeModal: closeModal,
        setSelectedCar: setSelectedCar,
        setAlertModal: setShowAlertModal,
    };

    return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export default GameContextProvider;
