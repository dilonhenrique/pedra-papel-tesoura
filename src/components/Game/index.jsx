import { useGameStateContext } from 'commom/contexts/GameState'
import { useScoreContext } from 'commom/contexts/Score'
import { useEffect, useState } from 'react'
import styles from './Game.module.css'
import Hand from './Hand'

import { motion } from 'framer-motion'

export default function Game() {
    const [picked, setPicked] = useState(null)
    const [pc, setPc] = useState(null)
    const [result, setResult] = useState(0)
    const { score, setScore } = useScoreContext()
    const { gameState, setGameState } = useGameStateContext()
    const maos = ["rock", "paper", "scissors"]

    useEffect(() => {
        switch (gameState) {
            case "choosing":
                setTimeout(() => {
                    setPc("rock");
                    // setPc(maoAleatoria());
                    setGameState("result");
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
        const mao = maos[Math.floor(Math.random() * maos.length)]

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

    const variants = {
        visible: i => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * 0.1,
            },
        }),
        hidden: { opacity: 0, scale: 0 },
    }

    return (
        <div className={`${styles.container} ${gameState !== "start" ? styles.container__picked : ""}`}>
            <div className={styles.playersChoice}>
                {
                    gameState !== "start" &&
                    <h3>Você</h3>
                }
                {
                    maos.map((mao, index) => {
                        if (picked === mao || picked === null)
                            return (
                                <motion.div className={styles.handWrapper}
                                    key={`${mao}${index}`}
                                    custom={index}
                                    initial="hidden"
                                    animate="visible"
                                    layout={true}
                                    variants={variants}
                                >
                                    <Hand type={mao} escolher={escolher} winner={result > 0 && picked === mao} />
                                </motion.div>
                            )
                    })
                }
            </div>

            {
                gameState === "result" &&
                <motion.div className={styles.result}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                >
                    <h2>{result > 0 ? "Você ganhou!" : result < 0 ? "Você perdeu" : "Empate"}</h2>
                    <button onClick={() => setGameState("start")}>Jogar de novo</button>
                </motion.div>
            }

            {
                gameState !== "start" &&
                <div className={styles.pcChoice}>
                    <h3>Computador</h3>
                    <motion.div className={styles.handWrapper}
                        initial="hidden"
                        animate="visible"
                        layout={true}
                        variants={variants}
                    >
                        <Hand type={pc} escolher={escolher} winner={(result && result < 0)} />
                    </motion.div>
                </div>
            }

        </div>
    )
}
