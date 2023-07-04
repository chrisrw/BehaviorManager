import Header from './components/Header';
import React from 'react';
import Container from '@mui/material/Container';
import IncidentForm from './components/IncidentForm';

import InfractionsTable from './components/InfractionsTable';


function App() {
  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="xl">
        <IncidentForm />
        <InfractionsTable />
      </Container>
      </React.Fragment>
  );
}

export default App;
