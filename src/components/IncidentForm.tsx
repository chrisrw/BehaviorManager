import React, { useState } from 'react';
import { TextField, Button, Box, Container } from '@mui/material';

interface FormValues {
  studentName: string;
  studentNumber: string;
  date: string;
  incidentDescription: string;
}

const initialFormValues: FormValues = {
  studentName: '',
  studentNumber: '',
  date: '',
  incidentDescription: '',
};

const IncidentForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log(formValues);
    // Reset form after submission
    setFormValues(initialFormValues);
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <TextField
          label="Student Name"
          name="studentName"
          value={formValues.studentName}
          onChange={handleChange}
        />

        <TextField
          label="Student Number"
          name="studentNumber"
          value={formValues.studentNumber}
          onChange={handleChange}
        />

        <TextField
          label="Date"
          name="date"
          value={formValues.date}
          onChange={handleChange}
        />

        <TextField
          label="Description of Incident"
          name="incidentDescription"
          multiline
          rows={4}
          value={formValues.incidentDescription}
          onChange={handleChange}
        />

        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Box>
    </>
  );
};

export default IncidentForm;
