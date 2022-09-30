import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from '../components/Navbar';
import { AuthContextProvider } from '../context/AuthContext';
import ProtectedRoute from '../components/ProtectedRoute';
import { useRouter } from 'next/router';

const noAuthRequired = ['/login', '/signup'];

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <AuthContextProvider>
        <NavbarComp />
        {noAuthRequired.includes(router.pathname) ? (
          <Component {...pageProps} />
        ) : (
          <ProtectedRoute>
            <Component {...pageProps} />
          </ProtectedRoute>
        )}
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
