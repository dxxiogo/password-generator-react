import styles from './styles.module.css';

export default function Title ({text, children}) {
    return (
        <h1 className={styles.title}>{text}{children}</h1>
        
    )
}