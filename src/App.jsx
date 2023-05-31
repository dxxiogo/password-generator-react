import { useState } from "react"
import Button from "./components/Button/Button"
import Password from "./components/Password/Password"
import PasswordAspects from "./components/PasswordAspects/PasswordAspects"
import Title from "./components/Title/Title"
import stateGeneratePassword from "./hooks/stateGeneratePassword"



export default function App () {
    const [password, generateRadomPassword] = stateGeneratePassword();
    const [aspect, setAspect] = useState('only letters');
    return (
        <>
            <Title text={"Password Generator with React"}/>
            <Password content={password}></Password> 
            <div>
                <PasswordAspects aspect={"Only letters"} changeAspect={setAspect} name={"password-aspect"}/>
                <PasswordAspects aspect={"Letters and numbers"} name={"password-aspect"} changeAspect={setAspect}/>
                <PasswordAspects aspect={"Letters, numbers and special characters"} name={"password-aspect"} changeAspect={setAspect}/>
            </div>
            <div>
                <Button text={"Generate"} actionBtn={() => generateRadomPassword(aspect)} />
                <Button text={"Copy"} currentPasswordValue = {password}/>
            </div>
        </>
  )
}
