import { FC, useState } from 'react'
import './Select.scss'
import classNames from 'classnames'

interface IOption {
    id: number
    title: string
}

interface ISelect {
    data: IOption[]
}

export const Select: FC<ISelect> = ({
    data
}) => {
    const [isOptionsOpen, setIsOptionsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState(0)

    const toggleOptions = () => {
        setIsOptionsOpen(!isOptionsOpen)
    }

    const setOption = (index: number) => {
        setSelectedOption(index)
        setIsOptionsOpen(false)
    }

    return (
        <div className="customSelect">
            <div className="customSelect__wrapper">
                <button className="customSelect__btn" type="button" onClick={toggleOptions}> {data[selectedOption].title} </button>
                <ul className={ classNames('customSelect__options', { 'show': isOptionsOpen })}>
                    {data.map((option, index) => (
                        <li key={option.id} className="customSelect__options-item" onClick={() => setOption(index)}> {option.title} </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}