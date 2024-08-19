import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import HomePage from '../pages/HomePage/HomePage'
import LoginPage from '../pages/LoginPage/LoginPage'
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage'
import ContactsPage from '../pages/ContactsPage/ContactsPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getMeThunk } from '../redux/auth/operations'
import { PrivateRoute } from '../Routes/PrivateRoute'
import { PublicRoute } from '../Routes/PublicRoute'
import { selectIsErrorAuth, selectIsRefreshing } from '../redux/auth/selectors'
import { Toaster } from 'react-hot-toast';
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Loader from './loader/Loader.jsx'
const App = () => {

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isError = useSelector(selectIsErrorAuth);

  useEffect(() => {
    dispatch(getMeThunk());
  }, [dispatch]);

  return isError === "Network Error" ? <ErrorPage /> : isRefreshing ? <Loader /> : (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={
          <HomePage />
          } />
        <Route path='/contacts' element={
          <PrivateRoute>
            <ContactsPage />
          </PrivateRoute>
          } />
        <Route path='*' element={
          <NotFoundPage />
          } />
      </Route>
      <Route path='/login' element={
        <PublicRoute>
          <LoginPage />
        </PublicRoute>
        } />
      <Route path='/register' element={
        <PublicRoute>
        <RegistrationPage />
        </PublicRoute>
        } />
    </Routes>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
    </>
  )
}

export default App