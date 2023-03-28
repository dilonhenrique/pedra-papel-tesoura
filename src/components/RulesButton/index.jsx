import rules from './image-rules.svg'
import styles from './RulesButton.module.css'
import ModalButton from 'components/Modal/ModalButton'

export default function RulesButton() {
    return (
        <ModalButton element={
            <>
                <h3 className={styles.titulo}>Regras:</h3>
                <img className={styles.imagem} src={rules} alt="Regras do jogo: papel ganha da pedra, pedra ganha da tesoura e tesoura ganha do papel." />
            </>
        }>
            Regras
        </ModalButton>
    )
}
