import { FC } from 'react'
import './budgetItem.scss'

import { IBudgetItem } from '../../types/incomsTypes'

export const BudgetItem: FC<IBudgetItem> = ({
    date, 
    sum, 
    type,
    category
}) => {
    return <div className={`budgetItem ${type === 'incomes' ? 'incomes' : 'expenses'}`}>
        <div className="budgetItem__category">{category}</div>
        <div className="budgetItem__date">{date}</div>
        <div className="budgetItem__sum">{sum}р</div>
    </div>
}