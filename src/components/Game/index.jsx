import { useGameStateContext } from 'commom/contexts/GameState'
import { useScoreContext } from 'commom/contexts/Score'
import { useEffect, useState } from 'react'
import styles from './Game.module.css'
import Hand from './Hand'

export default function Game() {
    const [picked, setPicked] = useState(null)
    const [pc, setPc] = useState(null)
    const [result, setResult] = useState(0)
    const { score, setScore } = useScoreContext()
    const { gameState, setGameState } = useGameStateContext()

    useEffect(() => {
        switch (gameState) {
            case "choosing":
                setTimeout(() => {
                    // setPc("rock");
                    setPc(maoAleatoria());
                    setGameState("result")
                }, 2000);
                break;
            case "result":
                chooseWinner();
                break;
            case "start":
            default:
                setPicked(null);
                setPc(null);
                setResult(0)
                break;
        }
    }, [gameState])

    function escolher(type) {
        if (gameState === "start") {
            setPicked(type)
            setGameState("choosing")
        } else {
            setGameState("start")
        }
    }

    function maoAleatoria() {
        const opcoes = ["rock", "paper", "scissors"]
        const mao = opcoes[Math.floor(Math.random() * opcoes.length)]

        return mao
    }

    function chooseWinner() {
        const win = 1,
            loose = -1,
            draw = 0

        if (pc === picked) {
            setResult(draw)
            return
        }

        switch (pc) {
            case "paper":
                picked === "rock" ? setResult(loose) : setResult(win)
                break;
            case "rock":
                picked === "scissors" ? setResult(loose) : setResult(win)
                break;
            case "scissors":
            default:
                picked === "paper" ? setResult(loose) : setResult(win)
                break;
        }
    }

    useEffect(() => {
        if (result) setScore(score + result)
    }, [result])

    return (
        <div className={`${styles.container} ${gameState !== "start" ? styles.container__picked : ""}`}>
            <div className={styles.playersChoice}>
                {
                    gameState !== "start" &&
                    <h3>Você</h3>
                }
                {
                    (picked === "paper" || picked === null) &&
                    <div className={styles.handWrapper}>
                        <Hand type="paper" escolher={escolher} winner={result > 0 && picked === "paper"} />
                    </div>
                }
                {
                    (picked === "scissors" || picked === null) &&
                    <div className={styles.handWrapper}>
                        <Hand type="scissors" escolher={escolher} winner={result > 0 && picked === "scissors"} />
                    </div>
                }
                {
                    (picked === "rock" || picked === null) &&
                    <div className={styles.handWrapper}>
                        <Hand type="rock" escolher={escolher} winner={result > 0 && picked === "rock"} />
                    </div>
                }
            </div>
            {
                gameState === "result" &&
                <div className={styles.result}>
                    <h2>{result > 0 ? "Você ganhou!" : result < 0 ? "Você perdeu" : "Empate"}</h2>
                    <button onClick={() => setGameState("start")}>Jogar de novo</button>
                </div>
            }

            {
                gameState !== "start" &&
                <div className={styles.pcChoice}>
                    <h3>Computador</h3>
                    <div className={styles.handWrapper}>
                        <Hand type={pc} escolher={escolher} winner={(result && result < 0)} />
                    </div>
                </div>
            }

        </div>
    )
}
