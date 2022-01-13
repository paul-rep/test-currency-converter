import React,{useState,useEffect,lazy,Suspense } from 'react'
import {useSelector } from 'react-redux';
import axios from 'axios';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const CurrencyRateList = lazy(() => import('../components/CurrencyRateList').then(module =>({default: module.CurrencyRateList})))

const BASE_URL = `http://api.exchangeratesapi.io/latest?access_key=4f6a585346d0ad7a0dfe4d2f0a05b1c2`;

export const ExchangeRates = () => {
    const base_currency = useSelector((state)=> state.currency.base_currency);
    const [symbols, setSymbols] = useState([]);
    const [rates, setRates] = useState({});


    useEffect(() => {
        fetch(BASE_URL)
          .then(res => res.json())
          .then(data => {
            setSymbols([...Object.keys(data.rates)]);
          })
          .catch(e => console.log(e));
      }, [])

    useEffect(() => {
        const fetchRates = async () => {
          try {
              const res = await axios.get(`${BASE_URL}&base=${base_currency}&symbols=${symbols.toString()}`);
          
              if (res && res.data && res.data.rates){
                setRates(res.data.rates);
                return res.data.rates;
              }
          } catch(e){
              console.log(e);
          }
        }
        fetchRates().then(rates => console.log(Object.entries(rates)));
    }, [symbols])

    return (
        <Box sx={{ mt: 15, flexGrow: 1, maxWidth: 752 }}>
       
            <Typography  variant="h6" component="div">
                 Exchange rates for {base_currency}:
            </Typography>
            <Suspense fallback={<p>Loading…</p>}>
                    <CurrencyRateList rates={rates}></CurrencyRateList>
            </Suspense>
        </Box>
    )
}
