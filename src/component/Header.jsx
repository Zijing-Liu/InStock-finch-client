import './Header.scss'
import logo from '../assets/Logo/InStock-Logo.svg'
// import { Link } from 'react-router-dom'

export default function Header() {

    return (
        <nav className='header'>
            <img className='header__logo' src={logo} alt="InStock Logo" />
            <ul className='header__list'>
                <li className='header__list-item'>Warehouses</li>
                <li className='header__list-item'>Inventory</li>
            </ul>
        </nav>
    )

}