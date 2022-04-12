import React from 'react'
import  d from'./Message.module.css'


type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={d.Message}>

                <div className={d.imag}>
                    <img src={props.avatar} alt="avatar"/>
                    <div className={d.xxx} id={'lll'}>
                        <div></div>
                    </div>

                </div>
                <div className={d.textArea}>
                    <div className={d.name}>{props.name}</div>
                    <div className={d.mesTime}>
                        <div>{props.message}</div>
                        <div className={d.time}>{props.time}</div>
                    </div>
                </div>
        </div>
    )
}

export default Message
