import styles from './styles.module.css';

export default function Button ({text, actionBtn, ...rest}) {
    return (
        <button className={styles.btn} onClick={actionBtn}>{text}</button>
    )
}