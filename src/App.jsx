import { useDispatch } from 'react-redux';
import { Suspense, useEffect } from 'react';

import Loader from './components/Loader/Loader';

import styles from './App.module.css';

import { refreshUser } from './redux/auth/operations';
import Navigation from './components/Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import NotFoundPage from './pages/NotFoundPage';
import Authorization from './components/Authorization/Authorization';
import Registration from './components/Registration/Registration';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div className={styles.appContainer}>
      <Navigation>
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
                  <Authorization />
                </RestrictedRoute>
              }
            />
            <Route
              path="registration"
              element={
                <RestrictedRoute>
                  <Registration />
                </RestrictedRoute>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Navigation>
    </div>
  );
}

export default App;
