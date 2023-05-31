import { useState } from "react";

export default function stateGeneratePassword () {
    const [password, setPassword] = useState('');
    const [passwordAspect, setPasswordAspect] = useState("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");

    const generateRadomPassword = (aspect) => {
        let newPassword = ''

        switch(aspect) {
            case 'Only letters':
                setPasswordAspect("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
            break;
            case 'Letters and numbers':
                setPasswordAspect("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");
            break;
            case 'Letters, numbers and special characters':
                setPasswordAspect("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890$#@*&!");
            break;
        }

    
        for(let i = 0; i < 10; i++ ) {
            newPassword += passwordAspect.charAt(Math.random() * passwordAspect.length);
        }
        setPassword(newPassword);
    }
   
    return [password, generateRadomPassword];
}