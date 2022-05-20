import Calendar from 'react-calendar'
import { FC, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import dayjs from 'dayjs'
import 'react-calendar/dist/Calendar.css'
import './CustomCalendar.scss'

import { TIME_FORMAT } from '../../../CONSTANTS/TIME'
import { useOnClickOutside } from '../../../hooks/useOnClickOutside'

interface ICalendar { 
    onChange: (value: Date) => void
}

export const CustomCalendar: FC<ICalendar> = ({ onChange }) => {
    const [isCalendarOpen, setIsCalendarOpen] = useState(false)
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        onChange(date)
    }, [date])


    const ref = useRef(null)
    useOnClickOutside(ref, () => setIsCalendarOpen(false))

    const dateToShow = dayjs(date).format(TIME_FORMAT.STANDARD)

    const toggleOptions = () => {
        setIsCalendarOpen(!isCalendarOpen)
    }


    return <div className="calendar" ref={ref}>
        <button type="button" className="calendar__button" onClick={toggleOptions}>{ dateToShow }</button>
        <Calendar className={classNames('', { 'open':  isCalendarOpen })} value={date} onChange={setDate} />
    </div>


}