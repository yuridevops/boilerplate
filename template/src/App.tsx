import { ThemeProvider } from 'styled-components'
import GlobalStyle from '~assets/styles/global'
import theme from '@frete.com/fuel-foundation/fretebras/theme.json'
import truck from '~assets/images/truck.gif'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <img
        src={truck}
        style={{ height: 200, position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)' }}
      />
    </ThemeProvider>
  )
}

export default App
