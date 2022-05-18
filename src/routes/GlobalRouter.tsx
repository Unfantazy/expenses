import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Incomes } from '../features/incomes/routes/Incomes'

export const GlobalRouter = () => {
    return (
        <Routes>
            <Route path="/incomes" element={<Incomes />} />
        </Routes >
    )
}

