import { createContext, useState } from "react";

export const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
    const [fromCurrency, setFromCurrency] = useState("🇬🇧 GBP - United Kingdom");
  const [toCurrency, setToCurrency] = useState("🇨🇦 CAD - Canada");

    const value ={
        fromCurrency,
        setFromCurrency,
        toCurrency,
        setToCurrency
    };
  return (
    <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>
  )
}

export default CurrencyProvider