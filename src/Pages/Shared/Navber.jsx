
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import logo from '../../assets/logo.svg';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Navber = () => {
    const {user, logOut} = useContext(AuthContext);
    const hadleLogout = () => {
        logOut()
        .then( () => { })
        .catch(err => console.error(err))
    }
    const navOptions = <>
        <li><Link>Home</Link></li>
        <li><Link>About</Link></li>
        <li><Link>Services</Link></li>
        <li><Link>Blog</Link></li>
        <li><Link>Contact</Link></li>
        {
            user? <li><Link onClick={hadleLogout}>Log out</Link></li> : 
            <li><Link to={'/login'}>Login</Link></li>
        }
    </>
    return (
        <div className="navbar bg-base-100 font-[]" >
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm text-dark2 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                       {navOptions}
                    </ul>
                </div>
                <img src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-dark2 px-1">
               {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
            <button className="text-2xl font-bold"><CiSearch/></button>
            <button className="btn btn-outline border-[#FF3811] text-[#FF3811] ml-6">Appointment</button>
            </div>
        </div>
    );
};

export default Navber;