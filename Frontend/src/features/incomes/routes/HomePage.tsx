import React from 'react'
import './HomePage.scss'
import * as yup from 'yup'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'

import { budgetMock } from '../../../__mocks__/mock'
import { BudgetItem } from '../components/BudgetItem'
import { AddingController } from '../components/AddingController'

export const HomePage = () => {
    const schema = yup.object({
        optionType: yup.number().required(),
        category: yup.string().required('Это поле обязательно'),
        sum: yup.number().required('Это поле обязательно'),
        date: yup.date().required(),
    }).required()

    const methods = useForm({
        defaultValues: {
            optionType: 2,
            category: '',
            sum: null,
            date: new Date()
        },
        resolver: yupResolver(schema)
    })

    const onSubmit = (data: any) => {
        const { category, date, sum, optionType } = data
        budgetMock.push({
            id: +new Date(),
            category,
            date,
            sum,
            type: optionType
        })
    }
    
    return (
        <div className="homePage">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <AddingController />
                </form>
            </FormProvider>
            <div className="analytics">
                <h2 className="analytics__title"> История доходов и расходов </h2>
                {budgetMock.map(el => {
                    return <BudgetItem key={el.id} date={el.date} sum={el.sum} category={el.category} type={el.type} />
                })}
            </div>
        </div>
    )
}
