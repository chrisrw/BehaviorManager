import React, { useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import { useInfractionsContext } from '../context/InfractionsContext';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import dayjs from 'dayjs';

  
const InfractionsTable: React.FC = () => {
  const { infractions, fetchInfractions } = useInfractionsContext();
  
    useEffect(() => {
      fetchInfractions()
    }, [fetchInfractions]);
  
    const handleDeleteInfraction = (student_number: string) => {
      // Make the DELETE request using Axios or fetch
      // Here's an example using Axios
      axios
        .delete(`http://localhost:3001/data/infractions/${student_number}`)
        .then((response) => {
          console.log(response.data);
          fetchInfractions(); // Fetch infractions again to update the table
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
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
                  <TableCell>{dayjs(infraction.date).format('MM-DD-YYYY')}</TableCell>
                  <TableCell>{infraction.period}</TableCell>
                  <TableCell>{infraction.incident_description}</TableCell>
                  <IconButton onClick={() => handleDeleteInfraction(infraction.student_number)}>
                    <DeleteIcon /> </IconButton>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };
  
  export default InfractionsTable;
  