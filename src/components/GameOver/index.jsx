import { useGameStateContext } from 'commom/contexts/GameState'
import { useScoreContext } from 'commom/contexts/Score'
import Modal from 'components/Modal'
import { useEffect, useState } from 'react'
import styles from './GameOver.module.css'
import { RiSkullLine } from 'react-icons/ri'
import { useOpenModalContext } from 'components/Modal/OpenModalContext'

export default function GameOver() {
    const [gameOver, setGameOver] = useState(false)
    const { score, setScore } = useScoreContext()
    const { setGameState } = useGameStateContext()

    useEffect(() => {
        if (score === 0) {
            setGameOver(true)
        }
    }, [score])

    function zerarScore() {
        setGameState("start")
        setScore(5)
        setGameOver(false)
    }

    return (
        gameOver &&
        <Modal open={true} style={{ backgroundColor: "#000" }} onClose={zerarScore}>
            <RiSkullLine style={{ fontSize: "60px", margin: "0 auto", display: "block", color: "#FFF" }} />
            <h3 className={styles.gameover}>Game Over!</h3>
        </Modal>
    )
}
