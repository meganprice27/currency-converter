import React from 'react';
import './App.css';
import InputAmount from './components/InputAmount';
import SelectCountry from './components/SelectCountry'
import { Container, Typography, Grid } from '@mui/material';
import SwitchCurrency from './components/SwitchCurrency';

function App() {
  return (
    <Container maxWidth="md" sx={{ background: '#fdfdfd'}}>
    <Typography variant='h5' sx={{ marginTop: "2rem"}}>click</Typography>
    <Grid container spacing={2}>
      <InputAmount />
      <SelectCountry />
      <SwitchCurrency />
      <SelectCountry />
    </Grid>
    </Container>
  )
}

export default App;
