import { OpenModalProvider, useOpenModalContext } from './OpenModalContext'
import { ReactComponent as Close } from './icon-close.svg'
import styles from './Modal.module.css'
import { useEffect } from 'react'
import { AnimatePresence, motion } from "framer-motion"

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

    function clickFora(e) {
        if (e.target.classList.value.includes("modalContainer"))
            fecharModal()
    }

    return (
        <AnimatePresence>
            {
                openModal &&
                <motion.div
                    initial={{ opacity: 0, zIndex: 5 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={styles.modalContainer}
                    onClick={clickFora}
                >
                    <motion.div
                        animation={{ y:"50%" }}
                        className={styles.modal}
                        style={style}
                    >
                        {children}
                        <button className={styles.botaoFechar} onClick={fecharModal}>
                            <Close />
                        </button>
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    )
}
