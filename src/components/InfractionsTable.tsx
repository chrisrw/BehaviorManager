import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from '@mui/material';
import { useInfractionsContext } from '../context/InfractionsContext';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import dayjs from 'dayjs';

interface Infraction {
  student_name: string;
  student_number: string;
  date: string;
  period: string;
  incident_description: string;
}

const InfractionsTable: React.FC = () => {
  const { infractions, fetchInfractions } = useInfractionsContext();
  const [selectedInfraction, setSelectedInfraction] = useState<Infraction | null>(null);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [editedInfraction, setEditedInfraction] = useState<Infraction>({
    student_name: '',
    student_number: '',
    date: '',
    period: '',
    incident_description: '',
  });

  useEffect(() => {
    fetchInfractions();
  }, [fetchInfractions]);

  const handleDeleteInfraction = (student_number: string) => {
    axios
      .delete(`http://localhost:3001/data/infractions/${student_number}`)
      .then((response) => {
        console.log(response.data);
        fetchInfractions();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleEditInfraction = (infraction: Infraction) => {
    setSelectedInfraction(infraction);
    setEditedInfraction({ ...infraction });
    setOpenEditDialog(true);
  };

  const handleUpdateInfraction = () => {
    if (!selectedInfraction) return;
    axios
      .put(`http://localhost:3001/data/infractions/${selectedInfraction.student_number}`, editedInfraction)
      .then((response) => {
        console.log(response.data);
        fetchInfractions();
        setOpenEditDialog(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleCancelEdit = () => {
    setOpenEditDialog(false);
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
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {infractions.map((infraction, index) => (
              <TableRow key={index}>
                <TableCell>{infraction.student_name}</TableCell>
                <TableCell>{infraction.student_number}</TableCell>
                <TableCell>{dayjs(infraction.date).format('MM-DD-YYYY')}</TableCell>
                <TableCell>{infraction.period}</TableCell>
                <TableCell>
                  <div style={{ whiteSpace: 'pre-wrap' }}>{infraction.incident_description}</div>
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleDeleteInfraction(infraction.student_number)}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton onClick={() => handleEditInfraction(infraction)}>
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={openEditDialog} onClose={handleCancelEdit}>
        <DialogTitle>Edit Infraction</DialogTitle>
        <DialogContent>
          <TextField
            label="Student Name"
            value={editedInfraction.student_name}
            onChange={(e) => setEditedInfraction({ ...editedInfraction, student_name: e.target.value })}
          />
          <TextField
            label="Student Number"
            value={editedInfraction.student_number}
            onChange={(e) => setEditedInfraction({ ...editedInfraction, student_number: e.target.value })}
          />
          <TextField
            label="Date"
            value={editedInfraction.date}
            onChange={(e) => setEditedInfraction({ ...editedInfraction, date: e.target.value })}
          />
          <TextField
            label="Period"
            value={editedInfraction.period}
            onChange={(e) => setEditedInfraction({ ...editedInfraction, period: e.target.value })}
          />
          <TextField
            label="Incident Description"
            value={editedInfraction.incident_description}
            onChange={(e) => setEditedInfraction({ ...editedInfraction, incident_description: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelEdit}>Cancel</Button>
          <Button onClick={handleUpdateInfraction}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default InfractionsTable;
