import { Link } from 'react-router-dom'
import './Header.scss'

export const Header = () => {
    return <header className="header">
        <Link to={'/incomes'} className="header__link"> Доходы </Link>
        <Link to={'/expenses'} className="header__link"> Расходы </Link>
    </header>
}