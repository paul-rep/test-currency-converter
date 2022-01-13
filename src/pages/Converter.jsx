import React, { useEffect, useState,lazy,Suspense } from 'react';
import '../App.css';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

import Modal from '../components/Modal';
const CurrencyRow = lazy(() => import('../components/CurrencyRow'));
const BASE_URL = `http://api.exchangeratesapi.io/latest?access_key=4f6a585346d0ad7a0dfe4d2f0a05b1c2`;


const Converter = () => {
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)
  const base_currency = useSelector((state)=> state.currency.base_currency);
  const is_currency_chosen = useSelector((state)=> state.currency.is_currency_chosen);


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
    fetch(`${BASE_URL}&base=${base_currency}`)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
        setExchangeRate(data.rates[firstCurrency]);
      })
  }, [])

  const fetchRates = async () => {
    dispatch({type:'CHANGE_CURRENCY', payload: fromCurrency});
    try {
        const res = await axios.get(`${BASE_URL}&base=${fromCurrency}&symbols=${toCurrency}`);
    
        
        if (res && res.data && res.data.rates){
          console.log("rates", res.data.rates[toCurrency]);
            setExchangeRate(res.data.rates[toCurrency])
        }
    } catch(e){
        console.log(e);
    }
  }
  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
        fetchRates();
    }
  }, [fromCurrency, toCurrency])

  const handleCurrencySwap = () => {
    let from = fromCurrency;
    let to = toCurrency;
    setFromCurrency(to);
    setToCurrency(from);
  }
  const handleFromAmountChange = (e) => {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }

  const handleToAmountChange = (e) => {
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }

  const onSelectCurrency = (value) =>{
    setFromCurrency(value);
    dispatch({type:'CHANGE_CURRENCY', payload: value });
    dispatch({type:'SET_INITIAL_CURRENCY', payload: true });
  }

  return (
    <div>
      <h3>Choose prefered currency</h3>
      {!is_currency_chosen && currencyOptions.length > 0 &&
      
        <Modal items={currencyOptions} onSelectCurrency={onSelectCurrency}></Modal> 
      }
      <Suspense fallback={<p>Loading…</p>}>
        <CurrencyRow key={2}
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
          key={3}
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
