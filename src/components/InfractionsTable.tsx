import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface Infraction {
    student_name: string;
    student_number: string;
    date: string;
    period: string;
    incident_description: string;
  }
  
const InfractionsTable: React.FC = () => {
    const [infractions, setInfractions] = useState<Infraction[]>([]);
  
    useEffect(() => {
      // Fetch the list of infractions from the server
        console.log(infractions)
      axios.get('http://localhost:3001/data')
        .then(response => {
          setInfractions(response.data);
        })
        .catch(error => {
          console.error('Error fetching infractions:', error);
        });
    }, []);
  
    return (
      <div>
        <h1>Infractions</h1>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Student Name</TableCell>
                <TableCell>Student Number</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Period</TableCell>
                <TableCell>Incident Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {infractions.map((infraction, student_number) => (
                <TableRow key={student_number}>
                  <TableCell>{infraction.student_name}</TableCell>
                  <TableCell>{infraction.student_number}</TableCell>
                  <TableCell>{infraction.date}</TableCell>
                  <TableCell>{infraction.period}</TableCell>
                  <TableCell>{infraction.incident_description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };
  
  export default InfractionsTable;
  