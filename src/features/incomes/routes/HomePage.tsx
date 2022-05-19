import React from 'react'
import './HomePage.scss'

import { budgetMock } from '../../../__mocks__/mock'
import { BudgetItem } from '../components/BudgetItem'

export const HomePage = () => {
    return (
        <div>
            <div className="analytics">
                <h2 className="analytics__title"> История доходов и расходов </h2>
                {budgetMock.map(el => {
                    return <BudgetItem key={el.id} date={el.date} sum={el.sum} category={el.category} type={el.type} />
                })}
            </div>

        </div>
    )
}
