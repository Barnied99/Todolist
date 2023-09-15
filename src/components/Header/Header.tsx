import { Link, useNavigate } from 'react-router-dom';
import { Text, Button, Switch, Group, useMantineTheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { useContext } from 'react';
import classNames from 'classnames';
import { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app.ts/hooks';
import ThemeContext from '../../store/theme-context';
import { userActions } from '../../store/slice/user-slice'
import './Header.css'

export const Header = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const thememant = useMantineTheme();
    const { theme, changeTheme } = useContext(ThemeContext);

    const [checked, setChecked] = useState(false);

    const { email: user } = useAppSelector((state: any) => {
        return state.user;
    });


    const headerClasses = classNames('header', {
        ocean: theme === 'ocean',
        violet: theme === 'violet',
    });

    const logoutHandler = () => {
        dispatch(userActions.logout());
        navigate(0);
    };

    const changeThemes = () => {
        checked ? changeTheme('ocean') : changeTheme('violet');
        setChecked(!checked)
    };


    return (
        <header className={headerClasses}>
            <nav className='flexheader' >
                <div className='logo'>
                    <img src="logos.svg" width={30} height={30} alt='Jobored' />
                    <Text className='logoname'>TodoList</Text>
                </div>
                <Group position="center">
                    <Switch
                        checked={checked} onChange={() => changeThemes()}
                        color={thememant.colorScheme === 'dark' ? 'gray' : 'dark'}
                        onLabel={<IconSun size="1rem" stroke={2.5} color={thememant.colors.yellow[4]} />}
                        offLabel={<IconMoonStars size="1rem" stroke={2.5} color={thememant.colors.blue[6]} />}
                    />
                </Group>
                {!user && (
                    <>
                        <div className='switchlogin'>
                            <Link to="/signin" >
                                <Button
                                    size={'sm'}
                                    variant="subtle"
                                    c="#ACADB9"
                                    component='a' href="/signin" className='active' >
                                    Sign in
                                </Button>
                            </Link>
                        </div>
                        <div className='switchlogup'>
                            <Link to="/signup">
                                <Button
                                    size={'sm'}
                                    variant="subtle"
                                    c="#ACADB9"
                                    component='a' href="/signup" className='active'  >
                                    Sign up
                                </Button>
                            </Link>
                        </div>
                    </>

                )}
                {user && (
                    <>
                        <div className='switchlogin'>
                            <Link to="/info">
                                <Button
                                    size={'sm'}
                                    variant="subtle"
                                    c="#ACADB9"
                                    component='a' href="/fav">Info</Button>
                            </Link>
                        </div>
                        <div className='switchlogup'>
                            <Link to="/signin" >
                                <Button
                                    size={'sm'}
                                    variant="subtle"
                                    c="#ACADB9"
                                    onClick={logoutHandler}
                                > Logout</Button>
                            </Link>
                        </div>
                    </>
                )}
            </nav>
        </header >
    )
}






