import React, { FC } from 'react'
import './Input.scss'

interface IInput {
    type?: string
    placeholder?: string
}

export const Input: FC<IInput> = ({
    type = 'string',
    placeholder = 'type here...'
}) => {
    return (
        <input className="Input" placeholder={placeholder} type={type} />
    )
}
