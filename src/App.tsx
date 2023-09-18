import { Route, Routes } from 'react-router-dom';
import React from 'react';

import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import HomePage from './pages/Home';
import { Header } from './components/Header/Header';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';


const App = () => {
  const LazyFooter = React.lazy(() => import('../src/components/Footer/Footer'))
  return (
    <>
      <Header />
      <div className='App'>
        <ErrorBoundary>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <React.Suspense fallback={<div>Loading...</div>}>
            <LazyFooter />
          </React.Suspense>
        </ErrorBoundary>
      </div>
    </>
  );
}

export default App;
