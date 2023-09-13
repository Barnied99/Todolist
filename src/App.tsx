import { Route, Routes } from 'react-router-dom';

import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import HomePage from './pages/Home';
import { Header } from './components/Header/Header';
// import { linkks } from './constants';
import Footer from './components/Footer/Footer';
import './App.css';



const App = () => {
  return (
    <>
      <Header />
      <div className='App'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
