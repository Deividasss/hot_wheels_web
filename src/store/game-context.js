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
    userInfo: [],
    selectedCar: [],
    winMoney: [],
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
    const [selectedDifficulty, setSelectedDifficulty] = useState([{ value: 0, label: '' }]);
    const winRewards = { easy: 50, normal: 200, hard: 350, };
    const lostMoneys = { easy: 25, normal: 120, hard: 200, };
    const [lostMoney, setLostMoney] = useState()
    const [winReward, setWinReward] = useState()
    const [selectedCar, setSelectedCar] = useState("");
    const carTotal = selectedCar.speed + selectedCar.handling + selectedCar.acceleration
    const [userInfo, setUserInfo] = useState([{
        name: "Deividas",
        level: 1,
        moneys: 200,
        levelCount: 0,
        nextLevel: 200
    }]);

    useEffect(() => {
        const savedUserInfo = JSON.parse(localStorage.getItem('userInfo'));

        if (savedUserInfo) {
            const user = savedUserInfo[0];
            setMoney(user.moneys);
            setLevel(user.level);
            setLevelCount(user.levelCount);
            setNextLevel(user.nextLevel)
            setUserInfo(savedUserInfo);
        }
    }, []);

    useEffect(() => {
        const itemInLocalStorage = localStorage.getItem('userInfo');

        if (itemInLocalStorage) {
            console.log('Item exists in local storage:', itemInLocalStorage);
        } else {
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
        }
    }, []);

    const setTimer = () => {
        setCountdown(5)
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

                let updatedMoney = money;
                let updatedLevelCount = levelCount;
                let userLevel = level
                let nextLevels = nextLevel

                if (carTotal > randomNum) {

                    if (selectedDifficulty.value === 350) {
                        updatedMoney += winRewards.easy;
                        updatedLevelCount += 60;
                        setWinReward(winRewards.easy)
                    } else if (selectedDifficulty.value === 600) {
                        updatedMoney += winRewards.normal;
                        updatedLevelCount += 40;
                        setWinReward(winRewards.normal)
                    } else {
                        updatedMoney += winRewards.hard;
                        updatedLevelCount += 40;
                        setWinReward(winRewards.hard)
                    }

                    setMoney(updatedMoney);
                    setLevelCount(updatedLevelCount);

                    const updatedUserInfo = userInfo.map((user) => ({
                        ...user,
                        moneys: updatedMoney,
                        levelCount: updatedLevelCount,
                        level: userLevel,
                        nextLevel: nextLevels,
                    }));
                    setUserInfo(updatedUserInfo);
                    localStorage.setItem('userInfo', JSON.stringify(updatedUserInfo));
                    setShowWinModal(true);
                } else {
                    let updatedLostResources;

                    if (selectedDifficulty.value === 350) {
                        updatedMoney -= lostMoneys.easy;
                        updatedLostResources = lostMoneys.easy;
                    } else if (selectedDifficulty.value === 600) {
                        updatedMoney -= lostMoneys.normal;
                        updatedLostResources = lostMoneys.normal;
                    } else {
                        updatedMoney -= lostMoneys.hard;
                        updatedLostResources = lostMoneys.hard;
                    }

                    setMoney(updatedMoney);
                    setLostMoney(updatedLostResources);
                    setLevelCount(updatedLevelCount + 20);
                    setShowLoseModal(true);
                    const updatedUserInfo = userInfo.map((user) => ({
                        ...user,
                        moneys: updatedMoney,
                        levelCount: updatedLevelCount,
                        level: userLevel,
                    }));
                    setUserInfo(updatedUserInfo);
                    localStorage.setItem('userInfo', JSON.stringify(updatedUserInfo));

                }

                if (updatedLevelCount >= nextLevels) {
                    setLevel((prevLeve) => prevLeve + 1);
                    setLevelCount(0);
                    setNextLevel(nextLevels * 1.2);
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
        winReward: winReward,
        lostMoney: lostMoney,
        userInfo: userInfo,
        setTimer: setTimer,
        selectDificullty: selectDificullty,
        closeModal: closeModal,
        setSelectedCar: setSelectedCar,
        setAlertModal: setShowAlertModal,
    };

    return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export default GameContextProvider;
