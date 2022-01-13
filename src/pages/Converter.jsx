import React, { useEffect, useState,lazy,Suspense } from 'react';
import '../App.css';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';


const CurrencyRow = lazy(() => import('../components/CurrencyRow'));
const Modal = lazy(() => import('../components/Modal'));

const BASE_URL = `https://api.exchangeratesapi.io/latest?access_key=${process.env.REACT_APP_ACCESS_KEY}`;


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

  const fetchCurrencies = async () => {
    try {
        const res = await axios.get(`${BASE_URL}&base=${base_currency}`);
        if (res && res.data && res.data.rates){
          const firstCurrency = Object.keys(res.data.rates)[0];
          setCurrencyOptions([res.data.base, ...Object.keys(res.data.rates)]);
          setFromCurrency(res.data.base);
          setToCurrency(firstCurrency);
          setExchangeRate(res.data.rates[firstCurrency]);
        }
    } catch(e){
        console.log(e);
    }
  }
  useEffect(() => {
    fetchCurrencies();
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
      <h3>Choose preferred currency</h3>
      {!is_currency_chosen && currencyOptions.length > 0 &&
         <Suspense fallback={<p>Loading…</p>}>
          <Modal items={currencyOptions} onSelectCurrency={onSelectCurrency}></Modal>
        </Suspense>
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
