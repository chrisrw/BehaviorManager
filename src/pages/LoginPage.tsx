import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface LoginFormValues {
  email: string;
  password: string;
}

const initialFormValues: LoginFormValues = {
  email: '',
  password: '',
};

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState<LoginFormValues>(initialFormValues);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic here

    // Simulating successful login
    navigate('/'); // Redirect to the home page
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleRegisterClick = () => {
    navigate('/register'); // Redirect to the registration page
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Typography variant="h4" component="h1" mb={4}>
          Login
        </Typography>
        <form onSubmit={handleFormSubmit}>
          <TextField
            type="email"
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formValues.email}
            onChange={handleInputChange}
          />
          <TextField
            type="password"
            name="password"
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formValues.password}
            onChange={handleInputChange}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
           Login
          </Button>
        </form>
        <Button onClick={handleRegisterClick} color="primary">
        Don't have an account? Register
        </Button>
      </Box>
    </Container>
  );
};

export default LoginPage;
