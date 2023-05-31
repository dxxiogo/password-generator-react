import styles from './styles.module.css';

export default function PasswordAspects ({aspect, changeAspect, ...rest}) {
    return (
        <>
          <input type="radio" onChange={() => changeAspect(aspect)} {...rest}/>
          <label>{aspect}</label>
        </>
    )
}