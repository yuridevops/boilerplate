import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
   * {
    margin: ${({ theme }) => theme.spacing.km0};
    padding: ${({ theme }) => theme.spacing.km0};
    font-family: ${({ theme }) => theme.font.family.body};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    font-size: ${({ theme }) => theme.font.size.base};
    box-sizing: border-box;
   }

   body, html, #root  {
    height: 100%;
  }
`
