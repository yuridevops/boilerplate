import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '~assets/styles/global'
import theme from '@frete.com/fuel-foundation/fretebras/theme.json'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>Boilerplate content</div>
    </ThemeProvider>
  )
}

export default App
