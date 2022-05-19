import { IBudgetItem, IIncoms } from '../features/incomes/types/incomsTypes'

export const incomesMock: IIncoms = {
    info: [
        { id: 1, source: 'salary', date: '25.05.2022', sum: 55000 },
        { id: 2, source: 'investments', date: '30.05.2022', sum: 10000 },
    ],
    total: 65000
}


export const budgetMock: IBudgetItem[] = [
    { id: 1, category: 'salary', date: '25.05.2022', sum: 55000, type: 'incomes' },
    { id: 2, category: 'fun', date: '22.05.2022', sum: 2000, type: 'expenses' },
    { id: 3, category: 'grocery', date: '25.05.2022', sum: 3500, type: 'expenses' },
    { id: 3, category: 'investments', date: '01.05.2022', sum: 1000, type: 'incomes' },
]