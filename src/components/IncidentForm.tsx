import React, { useState } from 'react';
import { TextField, Button, Box, Container, Grid, Select, MenuItem, SelectChangeEvent, InputLabel, FormControl } from '@mui/material';
import axios from 'axios';

interface FormValues {
  student_name: string;
  student_number: string;
  date: string;
  period: any;
  incident_description: string;
}

const initialFormValues: FormValues = {
  student_name: '',
  student_number: '',
  date: '',
  period: '',
  incident_description: '',
};

const IncidentForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSelectChange = (event: SelectChangeEvent<any>) => {
    const { value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      period: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formValues);
     // Make the POST request using Axios
     axios.post('http://localhost:3001/data/infractions', formValues)
     .then((response) => {
       console.log(response.data);
       setFormValues(initialFormValues);
     })
     .catch((error) => {
       console.error('Error:', error);
     });
  };

  return (
    <>

      <h1>Infraction Form</h1>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Student Name"
              name="student_name"
              fullWidth
              value={formValues.student_name}
              onChange={handleTextFieldChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Student Number"
              name="student_number"
              fullWidth
              value={formValues.student_number}
              onChange={handleTextFieldChange}
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel id="period">Period</InputLabel>
              <Select
                labelId="period"
                value={formValues.period}
                onChange={handleSelectChange}
                name="period"
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={1}>
            <TextField
              label="Date"
              name="date"
              fullWidth
              value={formValues.date}
              onChange={handleTextFieldChange}
            />
          </Grid>
          <Grid item xs={9}>
            <TextField
              label="Description of Incident"
              name="incident_description"
              multiline
              rows={4}
              fullWidth
              value={formValues.incident_description}
              onChange={handleTextFieldChange}
            />
          </Grid>
        </Grid>
        <Button size="large" type="submit" variant="contained" >
          Submit
          </Button>
      </Box>
      
      </>
  );
};

export default IncidentForm;
