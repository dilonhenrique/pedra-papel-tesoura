import { useGameStateContext } from 'commom/contexts/GameState'
import styles from './Hand.module.css'

import { motion } from 'framer-motion'


export default function Hand({
    type,
    escolher,
    winner = false
}) {
    const { gameState } = useGameStateContext()

    const style = {
        backgroundImage: `linear-gradient(0, var(--cor-${type}-degrade2), var(--cor-${type}-degrade1))`,
        boxShadow: `0 8px 0 var(--cor-${type}-sombra), 0 8px 15px rgba(0,0,0,0.5)`
    }

    const variants = {
        visible: { opacity: 1, scale: 1 },
        hidden: gameState === "result" ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }
    }

    return (
        type ?
            <>
                <motion.div
                    className={styles.handContainer}
                    onClick={() => gameState === "start" ? escolher(type) : ""}
                    style={style}
                    whileHover={gameState === "start" ? { scale: 1.15, rotate: -20 } : ""}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={variants}
                >
                    <img src={`/assets/icon/icon-${type}.svg`} alt="" />
                </motion.div>
                {
                    winner ?
                        <motion.div
                            className={styles.winner}
                            initial={{ scale: 0, zIndex: -1 }}
                            animate={{ scale: 1, transition: { bounce: 0 } }}
                        ></motion.div>
                        : ""
                }
            </>
            : <div className={styles.empty}>
                <motion.div
                    animate={{
                        rotate: [0, 20, 0],
                        y: [0, -20, 0],
                        x: [0, 10, 0],
                        transition: {
                            duration: 0.4,
                            repeatDelay: 0.1,
                            delay: 0.5,
                            repeat: 2,
                            ease: [0, 0.4, 0.5, 1]
                        }
                    }}
                >
                    <img src={`/assets/icon/icon-bumping.svg`} alt="" />
                </motion.div>
            </div>
    )
}