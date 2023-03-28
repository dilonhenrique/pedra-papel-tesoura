import { useScoreContext } from 'commom/contexts/Score'
import styles from './Score.module.css'

export default function Score() {
    const { score } = useScoreContext()

    return (
        <div className={styles.container}>
            <p className={styles.titulo}>Pontos</p>
            <p className={styles.pontos}>{score}</p>
        </div>
    )
}
