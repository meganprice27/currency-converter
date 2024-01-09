import './App.css';
import CurrencyRow from './CurrencyRow';

function App() {
  return (
    <div>
      <h1>Convert currency</h1>
    <CurrencyRow  />
    <div className="equals">=</div>
    <CurrencyRow />
    </div>
    
  );
}

export default App;
