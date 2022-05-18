import React from 'react'
import { incomesMock } from '../../../__mocks__/mock'
import { Table } from '../../../components/Form/Table'

export const Incomes = () => {
    return (
        <>
            <Table data={incomesMock} title="Мои доходы" />
        </>
    )
}
