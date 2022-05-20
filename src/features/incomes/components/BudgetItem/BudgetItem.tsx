import { FC } from 'react'
import dayjs from 'dayjs'
import './budgetItem.scss'

import { IBudgetItem } from '../../types/incomsTypes'
import { TIME_FORMAT } from '../../../../CONSTANTS/TIME'
import { OPTION_TYPES } from '../../../../CONSTANTS/CONSTANTS'
import { convertToNumberWithCommas } from '../../../../utils/utils'

export const BudgetItem: FC<IBudgetItem> = ({
    date, 
    sum, 
    type,
    category
}) => {
    const convertedSum = convertToNumberWithCommas(sum)
    const formattedDate = dayjs(date).format(TIME_FORMAT.STANDARD)

    return <div className={`budgetItem ${type === OPTION_TYPES.INCOMES ? 'incomes' : 'expenses'}`}>
        <div className="budgetItem__category">{category}</div>
        <div className="budgetItem__date">{formattedDate}</div>
        <div className="budgetItem__sum">{convertedSum}р</div>
    </div>
}