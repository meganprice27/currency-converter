import { Container, Typography, Grid } from '@mui/material';
import "./index.css"
import InputAmount from './components/InputAmount';
import SelectCountry from './components/SelectCountry'
import SwitchCurrency from './components/SwitchCurrency';

function App() {
  const boxStyles = {
    background: "#fdfdfd",
    marginTop: "3rem",
    textAlign: "center",
    color: "#222",
    minHeight: "20rem",
    borderRadius: 2,
    padding: "4rem 2rem",
    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
    position: "relative",
  }

  return (
    <Container maxWidth="md" sx={boxStyles}>
    <Typography variant='h5' sx={{ marginBottom: "2rem"}}>Currency Converter</Typography>
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
