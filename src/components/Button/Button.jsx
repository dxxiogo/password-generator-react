import styles from './styles.module.css';

export default function Button ({text, actionBtn, ...rest}) {
    return (
        <button onClick={actionBtn}>{text}</button>
    )
}