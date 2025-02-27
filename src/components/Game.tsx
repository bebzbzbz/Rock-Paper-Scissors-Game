import { useState, useEffect } from "react";

const Game = () => {
    const [userChoice, setUserChoice] = useState("")
    const [CPUChoice, setCPUChoice] = useState("")
    const [result, setResult] = useState("choose your move")
    const [round, setRound] = useState(0)
    const [userScore, setUserScore] = useState(0)
    const [CPUScore, setCPUScore] = useState(0)
    const [userImg, setUserImg] = useState("rock.svg")
    const [CPUImg, setCPUImg] = useState("rock.svg")

    const CPUOptions = ["Rock", "Paper", "Scissors"]

    const newRound = (userChoice : string) => {
        setUserChoice(userChoice)

        const randomIndex = Math.floor(Math.random() * 3)
        setCPUChoice(CPUOptions[randomIndex])

        setRound(prev => prev + 1)
    }

    const evalResult = () => {
        if(userChoice === CPUChoice) {
            setResult("it's a draw")
        } else if(userChoice === "Rock" && CPUChoice === "Scissors" || 
            userChoice === "Scissors" && CPUChoice === "Paper" || 
            userChoice === "Paper" && CPUChoice === "Rock") {
            setResult("you win")
            setUserScore(prev => prev + 1)
        } else {
            setResult("you lose")
            setCPUScore(prev => prev + 1)
        }
    }

    const changeImgs = () => {
        switch(true) {
            case userChoice === "Rock":
                setUserImg("rock.svg")
                break;
            case userChoice === "Paper":
                setUserImg("paper.svg")
                break;
            case userChoice === "Scissors":
                setUserImg("scissors.svg")
                break;
        }

        switch(true) {
            case CPUChoice === "Rock":
                setCPUImg("rock.svg")
                break;
            case CPUChoice === "Paper":
                setCPUImg("paper.svg")
                break;
            case CPUChoice === "Scissors":
                setCPUImg("scissors.svg")
                break;
        }
    }

    useEffect(() => {
        evalResult();
        changeImgs();
    }, [round]);

    const restartGame = () => {
        setUserChoice("")
        setCPUChoice("")
        setRound(0)
        setResult("choose your move")
        setUserScore(0)
        setCPUScore(0)
        setCPUImg("rock.svg")
        setUserImg("rock.svg")
    }

    return ( 
        <>
            <div>
                <p className="bold">Round {round}</p>
                <button onClick={restartGame} className="restartBtn">restart</button>
            </div>

            <div>
                <p className="bold">{result}</p>
                <p className="score">YOU {userScore} : {CPUScore} CPU</p>
            </div>

            <div className="choices">
                <button onClick={() => 
                    newRound("Rock")}>rock</button>
                <button onClick={() => 
                    newRound("Paper")}>paper</button>
                <button onClick={() => 
                    newRound("Scissors")}>scissors</button>
            </div>
            
            <img src={`/img/user/${userImg}`} alt={userChoice} className="userImg"/>
            <img src={`/img/CPU/${CPUImg}`} alt={CPUChoice} className="CPUImg"/>
        </>
    );
}

export default Game;