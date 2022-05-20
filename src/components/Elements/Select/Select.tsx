import { FC, useEffect, useRef, useState } from 'react'
import './Select.scss'
import classNames from 'classnames'

import { useOnClickOutside } from '../../../hooks/useOnClickOutside'

export interface IOption {
    id: number
    title: string
}

interface ISelect {
    data: IOption[]
    onChange: (id: number) => void
}

export const Select: FC<ISelect> = ({
    data,
    onChange
}) => {
    const [isOptionsOpen, setIsOptionsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState(0)

    const ref = useRef(null)
    useOnClickOutside(ref, () => setIsOptionsOpen(false))

    const toggleOptions = () => {
        setIsOptionsOpen(!isOptionsOpen)
    }

    const setOption = (index: number) => {
        setSelectedOption(index)
        setIsOptionsOpen(false)
    }

    useEffect(() => {
        onChange(data[selectedOption].id)
    }, [selectedOption])
    
    return (
        <div className="customSelect" ref={ref}>
            <div className="customSelect__wrapper">
                <button className="customSelect__btn" type="button" onClick={toggleOptions}> {data[selectedOption].title}  </button>
                <ul className={ classNames('customSelect__options', { 'show': isOptionsOpen })}>
                    {data.map((option, index) => (
                        <li key={option.id} className="customSelect__options-item" onClick={() => setOption(index)}> {option.title} </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}