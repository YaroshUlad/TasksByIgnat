import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date(Date.now()))
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        // stop
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            // setDate
            setDate(new Date(Date.now()))
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        // show
        setShow(true)
    }
    const onMouseLeave = () => {
        // close
        setShow(false)
    }
    const stringTime = `${date.getHours() < 10 ? 0 : ''}${date.getHours()} :
     ${date.getMinutes() < 10 ? 0 : ''}${date.getMinutes()} :
      ${date.getSeconds() < 10 ? 0 : ''}${date.getSeconds()}` // fix with date

    const stringDate = `${date.getFullYear()} /
     ${date.getMonth() < 10 ? 0 : ''}${date.getMonth()+1} /
      ${date.getDate() < 10 ? 0 : ''}${date.getDate()}` // fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
