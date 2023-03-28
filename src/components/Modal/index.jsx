import { OpenModalProvider, useOpenModalContext } from './OpenModalContext'
import { ReactComponent as Close } from './icon-close.svg'
import styles from './Modal.module.css'
import { useEffect } from 'react'

export default function Modal(props) {
    return (
        <OpenModalProvider>
            <RealModal {...props} />
        </OpenModalProvider>
    )
}

export function RealModal({ children, style, open = false, onClose = () => {} }) {
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
        openModal &&
        <div className={styles.modalContainer} onClick={clickFora}>
            <div className={styles.modal} style={style}>
                {children}
                <button className={styles.botaoFechar} onClick={fecharModal}>
                    <Close />
                </button>
            </div>
        </div>
    )
}
