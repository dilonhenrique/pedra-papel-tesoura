import styles from './Header.module.css';
import logo from './logo.svg'
import Score from './Score';

export default function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Pedra, Papel e Tesoura" />
            <Score />
        </header>
    )
}
