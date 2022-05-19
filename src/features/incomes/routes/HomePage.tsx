import React from 'react'
import './HomePage.scss'

import { budgetMock } from '../../../__mocks__/mock'
import { BudgetItem } from '../components/BudgetItem'
import { Input } from '../../../components/Elements/Input'
import { Button } from '../../../components/Elements'
import { Select } from '../../../components/Elements/Select'

export const HomePage = () => {
    const selectOptions = [
        { id: 1, title: 'Доходы' },
        { id: 2, title: 'Расходы' },
    ]

    return (
        <div>
            <div>
                <Select data={selectOptions} />
                <Input />
                <Input type="number" />
                <Button title="Add" />
                
            </div>
            <div className="analytics">
                <h2 className="analytics__title"> История доходов и расходов </h2>
                {budgetMock.map(el => {
                    return <BudgetItem key={el.id} date={el.date} sum={el.sum} category={el.category} type={el.type} />
                })}
            </div>

        </div>
    )
}
