// import React, { useState } from 'react';
// import { Box, Button, Container, TextField, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// interface LoginFormValues {
//   email: string;
//   password: string;
// }

// const initialFormValues: LoginFormValues = {
//   email: '',
//   password: '',
// };

// const LoginPage: React.FC = () => {
//   const navigate = useNavigate();
//   const [formValues, setFormValues] = useState<LoginFormValues>(initialFormValues);

//   const handleFormSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Login logic here

//     // Simulating successful login
//     navigate('/'); // Redirect to the home page
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormValues((prevValues) => ({
//       ...prevValues,
//       [name]: value,
//     }));
//   };

//   const handleRegisterClick = () => {
//     navigate('/register'); // Redirect to the registration page
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         justifyContent="center"
//         height="100vh"
//       >
//         <Typography variant="h4" component="h1" mb={4}>
//           Login
//         </Typography>
//         <form onSubmit={handleFormSubmit}>
//           <TextField
//             type="email"
//             name="email"
//             label="Email"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={formValues.email}
//             onChange={handleInputChange}
//           />
//           <TextField
//             type="password"
//             name="password"
//             label="Password"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={formValues.password}
//             onChange={handleInputChange}
//           />
//           <Button type="submit" variant="contained" color="primary" fullWidth>
//            Login
//           </Button>
//         </form>
//         <Button onClick={handleRegisterClick} color="primary">
//         Don't have an account? Register
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default LoginPage;
import React, { useState, useContext } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/UserContext'; // Import the UserContext

interface LoginPageValues {
  email: string;
  password: string;
}

const initialFormValues: LoginPageValues = {
  email: '',
  password: ''
};

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState<LoginPageValues>(initialFormValues);
  const { setUser } = useContext(UserContext); // Get the setUser function from the UserContext

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formValues, 'Form Values');
    try {
      await axios.post('http://localhost:3001/Login', formValues);
      setUser(formValues); // Set the user in the UserContext
      navigate('/');
      console.log('User Logged in successfully');
      // Redirect to the home page or perform any other necessary actions
    } catch (error) {
      console.error('Error Login user:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleRegisterClick = () => {
    navigate('/register');
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
          <Button onClick={handleRegisterClick} color="primary">
            Don't have an account? Register
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default LoginPage;
