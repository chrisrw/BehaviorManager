import Header from './components/Header';
import React from 'react';
import Container from '@mui/material/Container';
import IncidentForm from './components/IncidentForm';

import InfractionsTable from './components/InfractionsTable';
import { InfractionsProvider } from './context/InfractionsContext';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
    <InfractionsProvider>
      <Header />
      <Container maxWidth="xl">
        <IncidentForm />
        <InfractionsTable />
      </Container>
      </InfractionsProvider>
      </LocalizationProvider>
  );
}

export default App;
