import React, { FC } from 'react'
import './Button.scss'

interface IButton {
    title: string
}

export const Button: FC<IButton> = ({ title }) => {
    return (
        <button className="Button">
            {title}
        </button>
    )
}
