import { createContext, useState, useContext  } from 'react'
import {ThemeProvider} from "styled-components";
import React from 'react';


const ThemeContext = createContext()

export const useCustomTheme = () => useContext(ThemeContext)



const themes = {
  default : {
    main: '#003A5C',
    second: '#FF8086',
    third: '#FFE960',
    gray: "#f2f2f2",
    white: '#E8F4FF'
  },
  green: {
    main: '#19261E',
    second: '#798C7C',
    third: '#F2EA77',
    gray: "#f2f2f2",
    white: '#E8F4FF'
  }
}

const CustomThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('default')
  
  return (<ThemeContext.Provider value={{ setTheme, themes: Object.keys(themes), theme: themes[theme] }}>
    <ThemeProvider theme={themes[theme]}>
      {children}
    </ThemeProvider>
  </ThemeContext.Provider>)
}

export default CustomThemeProvider