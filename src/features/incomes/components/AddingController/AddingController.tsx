import React from 'react'

import { Select } from '../../../../components/Elements/Select'
import { Input } from '../../../../components/Elements/Input'
import { CustomCalendar } from '../../../../components/Elements/CustomCalendar'
import { Button } from '../../../../components/Elements'
import { useFormContext , Controller } from 'react-hook-form'

export const AddingController = () => {
    const { control, formState: { errors } } = useFormContext()

    const typeOptions = [
        { id: 1, title: 'Доходы' },
        { id: 2, title: 'Расходы' },
    ]

    return <div className="homePage__adding">
        <Controller
            control={control}
            name="optionType"
            render={({ field: { onChange } }) => <Select data={typeOptions} onChange={onChange} /> }
        />
        <Controller
            control={control}
            name="category"
            render={({ field: { onChange } }) => <Input placeholder="Категория" onChange={onChange} additionalClass={errors?.category ? 'error' : ''}/> }
        />

        <Controller
            control={control}
            name="sum"
            render={({ field: { onChange } }) => <Input placeholder="Сумма" onChange={onChange} type="number" additionalClass={errors?.sum ? 'error' : ''}/> }
        />
        <Controller
            control={control}
            name="date"
            render={({ field: { onChange } }) => <CustomCalendar onChange={onChange}/> }
        />
        <Button title="Add" type="submit" />
    </div>
}