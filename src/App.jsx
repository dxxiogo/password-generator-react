import { useState } from "react"
import Button from "./components/Button/Button"
import Password from "./components/Password/Password"
import PasswordAspects from "./components/PasswordAspects/PasswordAspects"
import Title from "./components/Title/Title"
import stateGeneratePassword from "./hooks/stateGeneratePassword"
import styles from "./styles.module.css";
import "./global.css"

function clipBoard (value) {
    if(value != '') {
        navigator.clipboard.writeText(value);
    }
}


export default function App () {
    const [password, generateRadomPassword] = stateGeneratePassword();
    const [aspect, setAspect] = useState('only letters');
    const [copyText, setCopyText] = useState('Copy')

    return (
        <div className={styles.app}>
            <Title text={"Password Generator with "}> <span style={{color: '#61DBFB'}}>{"React"}</span> </Title>
            <Password content={password}></Password> 
            <div className={styles.aspects}>
                <PasswordAspects aspect={"Only letters"} changeAspect={setAspect} name={"password-aspect"} />
                <PasswordAspects aspect={"Letters and numbers"} name={"password-aspect"} changeAspect={setAspect}/>
                <PasswordAspects aspect={"Letters, numbers and special characters"} name={"password-aspect"} changeAspect={setAspect}/>
            </div>
            <div className={styles.btns}>
                <Button text={"Generate"} actionBtn={() => {
                    generateRadomPassword(aspect);
                    setCopyText("Copy")
                }}/>
                <Button text={copyText} currentPasswordValue = {password} actionBtn={() => {
                    setCopyText("Copied!");
                    clipBoard(password);
                }}/>
            </div>
        </div>
  )
}
