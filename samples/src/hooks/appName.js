import { provide, inject } from 'vue'

const nameSymbol = Symbol('name')

// read from ENV or API
const name = 'Demo Vue APP 1.1'

export const provideName = () => provide(nameSymbol, name)
export const useName = () => inject(nameSymbol)
