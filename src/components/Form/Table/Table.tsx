import React, { FC } from 'react'
import './Table.scss'

import { IIncoms } from '../../../features/incomes/types/incomsTypes'

interface IProps {
    title: string
    data: IIncoms
}

export const Table: FC<IProps> = ({
    title,
    data
}) => {
    return <div className="table">
        <div className="table__title">
            <h5>{ title }</h5>
        </div>
        <div className="table__inner">
            <ul className="table__list">
                { data.info.map(el => {
                    return <li className="table__list-item" key={el.id}>
                        <span className="table__category">{el.source}</span>
                        <span>{el.sum}</span>
                        <span>{el.date}</span>
                    </li>
                })}
            </ul>
            <div className="table__total"> Всего: { data.total } </div>
        </div>
    </div>
}

