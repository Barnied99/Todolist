import React, { useState, useContext } from 'react';

import { Props } from '../types/types';

interface ThemeContextProps {
    theme: string;
    changeTheme: (theme: string) => void;
}


const ThemeContext = React.createContext<ThemeContextProps>({
    theme: 'ocean',
    changeTheme: (theme: string) => { }
});

export const ThemeProvider: React.FC<Props> = (props) => {
    const [theme, setTheme] = useState<string>(localStorage.getItem("theme") || "ocean"
    );
    const changeTheme = (chosenTheme: string) => {
        if (theme === chosenTheme) {
            return;
        }
        localStorage.setItem("theme", chosenTheme);
        setTheme(chosenTheme);
    };

    const contextValue: ThemeContextProps = {
        theme,
        changeTheme,
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextProps => useContext(ThemeContext);
export default ThemeContext;
