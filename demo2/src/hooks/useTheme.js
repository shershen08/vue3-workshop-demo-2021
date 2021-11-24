import { provide, inject } from 'vue'
import theme from '../config';

const themeSymbol = Symbol('theme')

  //sending
export const provideTheme = () => provide(themeSymbol, theme)

//using
export const useTheme = () => inject(themeSymbol)
