import { OpenModalProvider, useOpenModalContext } from './OpenModalContext'
import { ReactComponent as Close } from './icon-close.svg'
import styles from './Modal.module.css'
import { useEffect } from 'react'
<<<<<<< HEAD
=======
import { motion, AnimatePresence } from 'framer-motion'
>>>>>>> animation

export default function Modal(props) {
    return (
        <OpenModalProvider>
            <RealModal {...props} />
        </OpenModalProvider>
    )
}

export function RealModal({ children, style, open = false, onClose = () => { } }) {
    const { openModal, setOpenModal } = useOpenModalContext()

    function fecharModal() {
        setOpenModal(false)
        onClose()
    }

    useEffect(() => {
        setOpenModal(open)
    }, [open])

    return (
<<<<<<< HEAD
        openModal &&
        <div
            initial={{ opacity: 0, zIndex: 5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.modalContainer}
            onClick={clickFora}
        >
            <div
                animation={{ y: "50%" }}
                className={styles.modal}
                style={style}
            >
                {children}
                <button className={styles.botaoFechar} onClick={fecharModal}>
                    <Close />
                </button>
            </div>
        </div>
=======
        <AnimatePresence>
            {openModal &&
                <motion.div
                    initial={{ opacity: 0, zIndex: 5 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={styles.modalContainer}
                    onClick={() => fecharModal()}
                >
                    <motion.div
                        initial={{ y: "-6%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className={styles.modal}
                        style={style}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {children}
                        <button className={styles.botaoFechar} onClick={fecharModal}>
                            <Close />
                        </button>
                    </motion.div>
                </motion.div>}
        </AnimatePresence>
>>>>>>> animation
    )
}
