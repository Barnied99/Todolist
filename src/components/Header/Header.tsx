import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import classNames from 'classnames';

import { useAppSelector, useAppDispatch } from '../../app.ts/hooks';
import ThemeContext from '../../store/theme-context';
import { userActions } from '../../store/user-slice'


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
        <header className={headerClasses}>
            <div className='logo'>
                <Link to='/'>
                    <h1>Todolist</h1>
                    <span>Find your best paper friend here</span>
                </Link>
            </div>
            <nav className='navigation'>
                <ul>
                    {!user && (
                        <>
                            <li>
                                <NavLink
                                    to='/signin'
                                >
                                    Sign in
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/signup'
                                >
                                    Sign up
                                </NavLink>
                            </li>
                        </>
                    )}
                    {user && (
                        <div>
                            <NavLink
                                to='/signin'
                                onClick={logoutHandler}
                            >
                                Log out
                            </NavLink>
                        </div>
                    )}
                </ul>
            </nav>
        </header>
    )
}






