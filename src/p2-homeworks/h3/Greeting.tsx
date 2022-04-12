import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import message from "../h1/Message";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string | null // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}) => {


    const inputClass = error !== null ? s.error : ''
    const errorMessageClass = error !== null ? s.errormessage : ''
    const errorBlockButton = error !== null ? s.errorButton : ''
    const buttonDisabling = error !== null ? true : false
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addUser()
        }
    }
    return (
        <div className={s.wrapper}>
            <div>
                <input onKeyPress={onKeyPressHandler}
                       value={name}
                       onChange={setNameCallback}
                       className={inputClass}/>
                <span className={errorMessageClass}>{error}</span>
            </div>
            <button disabled={buttonDisabling}
                    className={errorBlockButton}
                    onClick={addUser}>add
            </button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
