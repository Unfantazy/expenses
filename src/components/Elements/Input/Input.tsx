import React, { ChangeEvent, FC, useState } from 'react'
import './Input.scss'

interface IInput {
    type?: string
    placeholder?: string
    onChange: (text: string) => void
    additionalClass?: string
}

export const Input: FC<IInput> = ({
    type = 'string',
    placeholder = 'type here...',
    onChange,
    additionalClass = ''
}) => {
    const [value, setValue] = useState('')
    
    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.currentTarget.value)
        setValue(e.currentTarget.value)
    }
    
    return (
        <input className={`Input ${additionalClass}`} placeholder={placeholder} type={type} value={value} onChange={changeValue}/>
    )
}
