import { IBudgetItem, IIncoms } from '../features/incomes/types/incomsTypes'
import { OPTION_TYPES } from '../CONSTANTS/CONSTANTS'

export const incomesMock: IIncoms = {
    info: [
        { id: 1, source: 'salary', date: '25.05.2022', sum: 55000 },
        { id: 2, source: 'investments', date: '30.05.2022', sum: 10000 },
    ],
    total: 65000
}


export const budgetMock: IBudgetItem[] = [
    { id: 1, category: 'salary', date: new Date(), sum: 55000, type: OPTION_TYPES.INCOMES },
    { id: 2, category: 'fun', date: new Date(), sum: 2000, type: OPTION_TYPES.EXPENSES },
    { id: 3, category: 'grocery', date: new Date(), sum: 3500, type: OPTION_TYPES.EXPENSES },
    { id: 3, category: 'investments', date: new Date(), sum: 1000, type: OPTION_TYPES.INCOMES },
]