import { Box, Container, Typography, Grid } from '@mui/material';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import InputAmount from './components/InputAmount';
import SelectCountry from './components/SelectCountry'
import SwitchCurrency from './components/SwitchCurrency';
import { CurrencyContext } from './context/CurrencyContext';

function App() {
  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstAmount
  } = useContext(CurrencyContext);
  const [resultCurrency, setResultCurrency] = useState(0);
  const calculatedResultCurrency = resultCurrency*firstAmount;
  const roundedResultCurrency = calculatedResultCurrency.toFixed(2);
;  const codeFromCurrency = fromCurrency.split(" ")[1];
  const codeToCurrency = toCurrency.split(" ")[1];

useEffect(() => {
  if(firstAmount) {
    axios("https://api.freecurrencyapi.com/v1/latest", {
      params: {
        apikey: "fca_live_k6ieFzlMDnqWULDQs7WeUz9CceRWA9i2GsVwGXta",
        base_currency: codeFromCurrency,
        currencies: codeToCurrency
      }
    })
    .then(response => setResultCurrency(response.data.data[codeToCurrency]))
    .catch(error => console.log(error))
  }
}, [firstAmount, fromCurrency, toCurrency, codeFromCurrency, codeToCurrency])

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
    <Typography variant='h4' sx={{ marginBottom: "2rem", fontWeight: "bold"}}>Currency Converter</Typography>
    <Grid container spacing={2}>
      <InputAmount />
      <SelectCountry value={fromCurrency} setValue={setFromCurrency} label="From"/>
      <SwitchCurrency />
      <SelectCountry value={toCurrency} setValue={setToCurrency} label="To"/>
    </Grid>
    {firstAmount ? (
      <Box sx={{textAlign: "left", marginTop: "1rem"}}>
        <Typography>{firstAmount} {fromCurrency} =</Typography>
        <Typography variant='h5' sx={{marginTop: "5px", fontWeight: "bold"}}>{roundedResultCurrency} {toCurrency}</Typography>
      </Box>
    ) : ""}
    </Container>
  )
}

export default App;
