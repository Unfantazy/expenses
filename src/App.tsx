import React from 'react'
import './App.scss'

import { GlobalRouter } from './routes/GlobalRouter'
import { Header } from './components/Form/Header'

function App() {
    return (
        <div className="App">
            <Header />
            <GlobalRouter />
        </div>
    )
}

export default App
