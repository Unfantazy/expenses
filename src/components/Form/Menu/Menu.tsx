import { Link } from 'react-router-dom'
import './Menu.scss'
import avatar from '../../../assets/avatar.jpg'
import { HomeIcon } from '../../../icons/HomeIcon'

export const Menu = () => {
    return <header className="menu">
        <div className="menu__user">
            <div className="menu__user-avatar">
                <img src={avatar} alt="avatar" />
            </div>
            <span className="menu__user-hello">
                Hi, Linka 👋
            </span>
        </div>
        <nav className="menu__navigation">
            <ul className="menu__list">
                <li className="menu__list-item">
                    <Link to={'/home'} className="menu__list-link"> <HomeIcon /> Home </Link>
                </li>
                <li className="menu__list-item">
                    <Link to={'/expenses'} className="menu__list-link"> Расходы </Link>
                </li>
            </ul>
        </nav>
    </header>
}