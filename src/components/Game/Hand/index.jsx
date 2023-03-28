import styles from './Hand.module.css'
import { ReactComponent as Paper } from './icon-paper.svg'
import { ReactComponent as Rock } from './icon-rock.svg'
import { ReactComponent as Scissors } from './icon-scissors.svg'

export default function Hand({ type, escolher, winner = false, player = "player" }) {
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
        <div
            className={`${styles.handContainer} ${styles[`handContainer__${type}`]} ${winner ? styles.handContainer__winner : ""} ${player === "pc" ? styles.pc : ""}`}
            onClick={() => escolher(type)}
        >
            {renderHand()}
        </div>
    )
}