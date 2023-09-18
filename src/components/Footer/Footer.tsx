import { Blockquote, Flex } from '@mantine/core';
import { useContext } from 'react';
import classNames from 'classnames';

import ThemeContext from '../../store/theme-context';

import './Footer.css'

const Footer = () => {

    const { theme } = useContext(ThemeContext);

    const footerClasses = classNames('footer', {
        ocean: theme === 'ocean',
        violet: theme === 'violet',
    });

    return (
        <Flex
            className={footerClasses}
        >
            <Blockquote cite="– Forrest Gump">
                Life is like an npm install – you never know what you are going to get.
            </Blockquote>
        </Flex >

    )

}


export default Footer;
