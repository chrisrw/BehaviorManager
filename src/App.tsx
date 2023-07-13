// import Header from './components/Header';
// import Container from '@mui/material/Container';
// import IncidentForm from './components/IncidentForm';
// import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
// import InfractionsTable from './components/InfractionsTable';
// import { InfractionsProvider } from './context/InfractionsContext';
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// import LoginPage from './pages/LoginPage';
// import Home from './pages/Home';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/login' element={<LoginPage />} />
//       </Routes>
//     <LocalizationProvider dateAdapter={AdapterDayjs} >
//     <InfractionsProvider>
//       <Header />
//           <Container maxWidth="xl">
//         <IncidentForm />
//         <InfractionsTable />
//       </Container>
//         </InfractionsProvider>
//         </LocalizationProvider>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';
import Container from '@mui/material/Container';
import IncidentForm from './components/IncidentForm';
import InfractionsTable from './components/InfractionsTable';
import { InfractionsProvider } from './context/InfractionsContext';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Home from './pages/Home';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Router>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <InfractionsProvider>
          <Header />
          <Container maxWidth="xl">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />
            </Routes>

          </Container>
        </InfractionsProvider>
      </LocalizationProvider>
    </Router>
  );
}

export default App;

