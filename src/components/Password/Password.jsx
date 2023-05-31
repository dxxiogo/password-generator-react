import styles from './styles.module.css';

export default function Password ({content}) {
    return (
        <div style={{
            border: "1px solid black",
            height: '2rem',
            width: '10rem'
        }}>
            <p>{content}</p>
        </div>
    )
}