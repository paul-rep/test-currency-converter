import React, { useEffect, useState,lazy,Suspense } from 'react';
import '../App.css';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
const CurrencyRow = lazy(() => import('../components/CurrencyRow'))


const BASE_URL = `http://api.exchangeratesapi.io/latest?access_key=${process.env.REACT_APP_ACCESS_KEY}`;




const Converter = () => {
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

  const dispatch = useDispatch();

  let toAmount, fromAmount
  if (amountInFromCurrency) {
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
        setExchangeRate(data.rates[firstCurrency]);
      })
  }, [])

  useEffect(() => {
      const fetchRates = async () => {
        dispatch({type:'CHANGE_CURRENCY', payload: fromCurrency});
        try {
            const res = await axios.get(`${BASE_URL}&base=${fromCurrency}&symbols=${toCurrency}`);
        
            console.log("ex_rates", res?.data);
            if (res && res.data && res.data.rates){
                setExchangeRate(res.data.rates[toCurrency])
            }
        } catch(e){
            console.log(e);
        }
      }
    if (fromCurrency != null && toCurrency != null) {
        fetchRates();
    }
  }, [fromCurrency, toCurrency])

  const handleCurrencySwap = () => {
    let to = toCurrency;
    setToCurrency(fromCurrency);
    setFromCurrency(to);
  }
  const handleFromAmountChange = (e) => {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }

  const handleToAmountChange = (e) => {
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }

  return (
    <div>
      <h1>Convert</h1>
      <Suspense fallback={<p>Loading…</p>}>
        <CurrencyRow key={1}
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
          onChangeCurrency={e => setFromCurrency(e.target.value)}
          onChangeAmount={handleFromAmountChange}
          amount={fromAmount}
        />
      </Suspense>
  
      <div onClick={handleCurrencySwap} className="equals-sign"><SwapHorizIcon/></div>
      
      <Suspense fallback={<p>Loading…</p>}>
        <CurrencyRow
          key={2}
          currencyOptions={currencyOptions}
          selectedCurrency={toCurrency}
          onChangeCurrency={e => setToCurrency(e.target.value)}
          onChangeAmount={handleToAmountChange}
          amount={toAmount}
        />
      </Suspense>

    </div>
  );
}

export default Converter;
