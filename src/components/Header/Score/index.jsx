import { useScoreContext } from 'commom/contexts/Score'
import styles from './Score.module.css'
import { useAnimate } from 'framer-motion'
import { useEffect } from 'react'

export default function Score() {
    const { score } = useScoreContext()
    const [scope, animate] = useAnimate()

    useEffect(() => {
        const slide = async () => {
            await animate(scope.current, { y: "1em", opacity: 0 }, { duration: 0.1 })
            await animate(scope.current, { y: "-1em", opacity: 0 }, { duration: 0 })
            animate(scope.current, { y: 0, opacity: 1 }, { duration: 0.1 })
        }
        slide()
    }, [score])

    return (
        <div className={styles.container}>
            <p className={styles.titulo}>Pontos</p>
            <p ref={scope} className={styles.pontos}>
                {score}
            </p>
        </div>
    )
}
