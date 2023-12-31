// import React, { useState } from 'react';
// import { Box, Button, Container, TextField, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// interface RegisterFormValues {
//   email: string;
//   password: string;
// }

// const initialFormValues: RegisterFormValues = {
//   email: '',
//   password: '',
// };

// const RegisterPage: React.FC = () => {
//   const navigate = useNavigate();
//   const [formValues, setFormValues] = useState<RegisterFormValues>(initialFormValues);

//   const handleFormSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Registration logic here

//     // Simulating successful registration
//     navigate('/login'); // Redirect to the login page
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormValues((prevValues) => ({
//       ...prevValues,
//       [name]: value,
//     }));
//   };

//   const handleLoginClick = () => {
//     navigate('/login'); // Redirect to the login page
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
//           Register
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
//             Register
//           </Button>
//         </form>
//         <Button onClick={handleLoginClick} color="primary">
//           Already have an account? Login
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default RegisterPage;
import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface RegisterPageValues {
  email: string;
  password: string;
}

const initialFormValues: RegisterPageValues = {
  email: '',
  password: '',
};

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState<RegisterPageValues>(initialFormValues);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formValues, 'Form Values')
    try {
      await axios.post('http://localhost:3001/register', formValues);
      navigate('/login'); 
      console.log('User registered successfully');
      // Redirect to the login page or perform any other necessary actions
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleLoginClick = () => {
    navigate('/login'); 
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
          Register
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
            Register
          </Button>
<Button onClick={handleLoginClick} color="primary">
Already have an account? Login
 </Button>
        </form>
      </Box>
    </Container>
  );
};

export default RegisterPage;
