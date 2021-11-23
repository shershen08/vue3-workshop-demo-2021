import { provide, inject } from 'vue'

const themeSymbol = Symbol('theme')

// read from ENV or API
const theme = {
  mainColor: '#ffcc00',
  bgColor: '#000000',
  fontSize: '16px'
}

export const provideTheme = () => provide(themeSymbol, theme)
export const useTheme = () => inject(themeSymbol)
