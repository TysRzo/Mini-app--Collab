import { Link } from 'react-router';

const NavLink = () => {
    const handleLogout = () => {
        console.log('Déconnexion');
    };

    return (
        <nav className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
            <Link 
                to="/login" 
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
                Login
            </Link>
            <Link 
                to="/register" 
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
                Register
            </Link>
            <button 
                onClick={handleLogout}
                className="ml-auto rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
            >
                Logout
            </button>
        </nav>
    );
};

export default NavLink;