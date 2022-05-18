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
