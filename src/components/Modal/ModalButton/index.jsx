import Modal, { RealModal } from 'components/Modal'
import styles from './ModalButton.module.css'
import { OpenModalProvider, useOpenModalContext } from '../OpenModalContext'

export default function ModalButton(props) {
    return (
        <OpenModalProvider>
            <RealButton {...props} />
        </OpenModalProvider>
    )
}

function RealButton({ children, element }) {
    const { setOpenModal } = useOpenModalContext()
    return (
        <>
            <button
                className={styles.botao}
                onClick={() => {
                    setOpenModal(true)
                }}
            >
                {children}
            </button>
            <RealModal>
                {element}
            </RealModal>
        </>
    )
}
