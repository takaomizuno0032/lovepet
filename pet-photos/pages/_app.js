import { ThemeProvider } from '@mui/material/styles';
import '../styles/globals.css';
import theme from '../config/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>)

}

export default MyApp
