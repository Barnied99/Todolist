import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import classNames from 'classnames';

import { useAppSelector, useAppDispatch } from '../../app.ts/hooks';
import ThemeContext from '../../store/theme-context';
import { userActions } from '../../store/slice/user-slice'
import './Header.css'

export const Header = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { email: user } = useAppSelector((state: any) => {
        return state.user;
    });

    const { theme } = useContext(ThemeContext);

    const headerClasses = classNames('header', {
        ocean: theme === 'ocean',
        violet: theme === 'violet',
    });

    const logoutHandler = () => {
        dispatch(userActions.logout());
        navigate(0);
    };

    return (
        <header >
            <nav className='flexheader' >
                <div className='logo'>
                    <img src="logos.svg" width={30} height={30} alt='Jobored' />
                    <div className='logoname'>Todolist</div>
                </div>
                <div className='search'>
                    <Link to="/signin" >
                        <a href="/signin" className='active' >
                            Signin
                        </a>
                    </Link>
                </div>
                <div className='favorites'>
                    <Link to="/favorites">
                        <a href="/favorites" className='active'  >
                            Signup
                        </a>
                    </Link>
                </div>
            </nav>
        </header>
    )
}






