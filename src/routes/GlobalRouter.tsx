import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../features/incomes/routes'

export const GlobalRouter = () => {
    return (
        <Routes>
            <Route path="/home" element={<HomePage />} />
        </Routes >
    )
}

