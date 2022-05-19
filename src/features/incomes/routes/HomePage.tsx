import React from 'react'
import { budgetMock } from '../../../__mocks__/mock'
import { BudgetItem } from '../components/BudgetItem'

export const HomePage = () => {
    return (
        <div>
            {budgetMock.map(el => {
                return <BudgetItem key={el.id} date={el.date} sum={el.sum} category={el.category} type={el.type} />
            })}
        </div>
    )
}
