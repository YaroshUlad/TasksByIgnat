import React, {useEffect, useState,KeyboardEvent} from 'react'
import s from './AltSelect.module.css'

function AlternativeSuperSelect() {
    const items = [
        {id: 1, value: 'first'},
        {id: 2, value: 'second'},
        {id: 3, value: 'third'},
    ]
    const [selectedValue, setSelectedValue] = useState(items[0].value)

    const changeSelectedValue = (newSelectedValue: string) => {
        setSelectedValue(newSelectedValue)
    }
    return (
        <Select selectedValue={selectedValue} items={items} onChange={changeSelectedValue}/>
    )
}
export type ItemsForSelectType = {
    value: string
    id: number
}


type SelectPropsType = {
    selectedValue: string
    items: ItemsForSelectType[]
    onChange: (newSelectedValue: string) => void
}


export const Select: React.FC<SelectPropsType> = ({selectedValue, items, onChange}) => {
    const [changeMode, setChangeMod] = useState(false)
    const [selectedItem, setSelectedItem] = useState(selectedValue)

    const onDivClick = () => {
        setChangeMod(!changeMode)
    }
    useEffect(() => {
        setSelectedItem(selectedValue)
    }, [selectedValue])

    const onItemClick = (newSelectedItem: string) => {
        onChange(newSelectedItem)
        setChangeMod(false)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < items.length; i++) {
                if (items[i].value === selectedItem) {
                    if(e.key === 'ArrowDown'){
                        items[i+1] && onChange(items[i + 1].value); break
                    }
                    if(e.key === 'ArrowUp'){
                        items[i-1] && onChange(items[i - 1].value); break
                    }
                }
            }
        }
        if (e.key === 'Enter'||e.key === 'Escape') {
            onChange(selectedItem)
            setChangeMod(false)
        }
    }

    return (
        <div onKeyUp={onKeyPressHandler} tabIndex={0} className={s.selectWrapper}>
            <div onClick={onDivClick} className={s.selected}>{selectedValue}</div>
            {changeMode && (<div>
                {items.map(el => {
                    return (
                        <div onClick={() => onItemClick(el.value)} className={selectedItem === el.value ? s.active : ''}
                             key={el.id}>{el.value}</div>
                    )
                })}
            </div>)}
        </div>
    );
};

export default AlternativeSuperSelect
