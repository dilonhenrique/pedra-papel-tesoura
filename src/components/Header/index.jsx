import styles from './Header.module.css';
import { ReactComponent as Logo } from './logo.svg'
import Score from './Score';

export default function Header() {
    return (
        <header className={styles.header}>
            <Logo />
            <Score />
        </header>
    )
}
