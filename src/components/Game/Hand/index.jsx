import { useGameStateContext } from 'commom/contexts/GameState'
import styles from './Hand.module.css'
import { ReactComponent as Paper } from './icon-paper.svg'
import { ReactComponent as Rock } from './icon-rock.svg'
import { ReactComponent as Scissors } from './icon-scissors.svg'

export default function Hand({
        type,
        escolher,
        winner = false
    }) {
    const { gameState } = useGameStateContext()

    function renderHand() {
        switch (type) {
            case "paper":
                return <Paper />
            case "rock":
                return <Rock />
            case "scissors":
                return <Scissors />
            default:
                return ""
        }
    }

    return (
        type ?
        <div
            className={styles.handContainer}
            onClick={() => gameState === "start" ? escolher(type) : ""}
        >
            {renderHand()}
        </div>
        : <div
            className={styles.empty}
        >
        </div>
    )
}