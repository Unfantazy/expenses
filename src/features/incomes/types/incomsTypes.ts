export interface IIncomsInfo {
    id: number
    source: string
    date: string
    sum: number
}

export interface IIncoms {
    info: IIncomsInfo[]
    total: number
}


export interface IBudgetItem {
    id?: number
    category: string
    date: string
    sum: number
    type: 'incomes' | 'expenses'

}