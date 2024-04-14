import { useDispatch } from 'react-redux';
import { Suspense, useEffect } from 'react';
import { refreshUser } from './redux/auth/operations';
import { Route, Routes } from 'react-router-dom';

import styles from './App.module.css';
import Loader from './components/Loader/Loader';
import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import NotFoundPage from './pages/NotFoundPage';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Layout from './components/Layout/Layout';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import LoginPage from './pages/LoginPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div className={styles.appContainer}>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="contacts"
              element={
                // <ContactsPage />
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="authorization"
              element={
                <RestrictedRoute>
                  <LoginPage />
                </RestrictedRoute>
              }
            />
            <Route
              path="registration"
              element={
                <RestrictedRoute>
                  <RegistrationForm />
                </RestrictedRoute>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
