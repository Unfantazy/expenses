import { FC } from 'react'


export const Layout: FC<any> = ({ children }) => {
    return <div className="app-wrapper">
        {children}
    </div>
}