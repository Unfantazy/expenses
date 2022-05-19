import React from 'react'
import './App.scss'

import { GlobalRouter } from './routes/GlobalRouter'
import { Menu } from './components/Form/Menu'
import { Layout } from './components/Layout/Layout'

function App() {
    return (
        <div className="App">
            <Layout>
                <Menu />
                <GlobalRouter />
            </Layout>
        </div>
    )
}

export default App
