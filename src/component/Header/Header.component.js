import './Header.style.scss';
import { Link } from "react-router-dom";
import { lightTheme, darkTheme } from '../../util/icons';

const Header = (props) => {
   const{
        ThemeChange,
        themeToggler
   } = props;
    return(
        <>
            <header className={`header ${themeToggler ? 'darkTheme' : 'lightTheme'}`}>
                <div className="Header-logo">
                    <h1>{('Surya')}</h1>
                </div>
                <div className="Header navbar">
                    <ul className="nav-link">
                        <li><Link className='header-link' to={'/'}>{('Home')}</Link></li>
                        <li><Link className='header-link' to={'/books'}>{('Books')}</Link></li>
                        <li><Link className='header-link' to={'/skills'}>{('Skills')}</Link></li>
                        <li><Link className='header-link' to={'/contact'}>{('Contact')}</Link></li>
                    </ul>
                    <div className={themeToggler ? 'Theme darkTheme' : 'Theme lightTheme'} onClick={ThemeChange}>
                        { themeToggler ? darkTheme() : lightTheme() }
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header