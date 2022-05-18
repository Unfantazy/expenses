import { IIncoms } from '../features/incomes/types/incomsTypes'

export const incomesMock: IIncoms = {
    info: [
        { id: 1, source: 'salary', date: '25.05.2022', sum: 55000 },
        { id: 2, source: 'investments', date: '30.05.2022', sum: 10000 },
    ],
    total: 65000
}