import { Outlet } from 'react-router';
import './App.css';
import Header from './components/header/Header';
import { createContext, use, useState } from 'react';
import { Theme } from './enums/constans.enum';
import themeIcon from 'public/theme-light-dark.svg';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({ theme: Theme.LIGHT, toggleTheme: () => {} });
export const useTheme = () => use(ThemeContext);

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
  const toggleTheme = () => {
    console.log('toole');

    setTheme((prev) => (prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
  };
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div id="app" data-theme={theme}>
      <button className="border-0 bg-transparent w-12 h-12" onClick={toggleTheme}>
        <img src={themeIcon} alt="icon" className={` ${theme}:invert`} />
      </button>
      <Header />

      <Outlet />
    </div>
  );
}

export default App;
