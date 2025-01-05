import { Link, useLocation } from 'react-router-dom';
import logo from '../logo.png';

export default function Nav() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path ? 'font-bold' : '';

    return (
        <nav className="text-white px-6 py-4 flex justify-start items-center shadow-lg" style={{ backgroundColor: '#003056' }}>
            <div className="flex items-center space-x-2">
                <img src={logo} alt="Logo" className="w-10 h-10" />
            </div>
            <ul className="flex space-x-6 ml-16 text-sm">
                <li>
                    <Link to="/" className={`hover:text-gray-300 ${isActive('/')}`}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="#portfolio" className={`hover:text-gray-300 ${isActive('#portfolio')}`}>
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link to="#contact" className={`hover:text-gray-300 ${isActive('#contact')}`}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
