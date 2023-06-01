import styles from './styles.module.css';

export default function Password ({content}) {
    return (
        <div className={styles["password-area"]}>
            <p>{content}</p>
        </div>
    )
}