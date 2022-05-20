import React, { FC } from 'react'
import { noop } from 'lodash'
import './Button.scss'

interface IButton {
    title: string
    onClick?: () => void
    type: 'button' | 'submit' | 'reset'
}

export const Button: FC<IButton> = ({ title,type, onClick = noop }) => {
    return (
        <button className="Button" onClick={onClick} type={type}>
            {title}
        </button>
    )
}
