import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../features/incomes/routes/HomePage'

export const GlobalRouter = () => {
    return (
        <Routes>
            <Route path="/home" element={<HomePage />} />
        </Routes >
    )
}

