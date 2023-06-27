import Header from './components/Header';
import React from 'react';
import Container from '@mui/material/Container';
import IncidentForm from './components/IncidentForm';
import Students from './components/Students';


function App() {
  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="lg">
        <IncidentForm />
        <Students />
      </Container>
      </React.Fragment>
  );
}

export default App;
