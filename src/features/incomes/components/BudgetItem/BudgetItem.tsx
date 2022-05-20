import { FC } from 'react'
import dayjs from 'dayjs'
import './budgetItem.scss'

import { IBudgetItem } from '../../types/incomsTypes'
import { TIME_FORMAT } from '../../../../CONSTANTS/TIME'
import { OPTION_TYPES } from '../../../../CONSTANTS/CONSTANTS'

export const BudgetItem: FC<IBudgetItem> = ({
    date, 
    sum, 
    type,
    category
}) => {
    return <div className={`budgetItem ${type === OPTION_TYPES.INCOMES ? 'incomes' : 'expenses'}`}>
        <div className="budgetItem__category">{category}</div>
        <div className="budgetItem__date">{dayjs(date).format(TIME_FORMAT.STANDARD)}</div>
        <div className="budgetItem__sum">{sum}р</div>
    </div>
}