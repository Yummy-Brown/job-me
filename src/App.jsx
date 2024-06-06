import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react';
import Fallback from './components/Fallback';
const HomePage = lazy(() => import('./pages/HomePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const LogInPage = lazy(() => import('./pages/LogInPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const JobApplicationPage = lazy(() => import('./pages/JobApplicationPage'));
const JobListingsPage = lazy(() => import('./pages/JobListingsPage'));


// import { HomePage, LogInPage, SignUpPage, ContactPage, JobApplicationPage } from './pages'
  


function App() {
  

  return (
    <div>
      <Router>
        <Routes>
        <Route path='/' element={<Suspense fallback={<Fallback />}><HomePage /></Suspense>} />
        <Route path='/login' element={<Suspense fallback={<Fallback />}><LogInPage /></Suspense>} />
        <Route path='signUp' element={<Suspense fallback={<Fallback />}><SignUpPage /></Suspense>} />
        <Route path='/contact' element={<Suspense fallback={<Fallback />}><ContactPage /></Suspense>} />
        <Route path='/jobApplication' element={<Suspense fallback={<Fallback />}><JobApplicationPage /></Suspense>} />
        <Route path='/jobListings' element={<Suspense fallback={<Fallback />}><JobListingsPage /></Suspense>} />
        </Routes>
      </Router>
      
    </div>
 
)


}

export default App;
