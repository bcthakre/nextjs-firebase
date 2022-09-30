import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from '../components/Navbar';
import { AuthContextProvider } from '../context/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthContextProvider>
        <NavbarComp />
        <Component {...pageProps} />
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
