import React from 'react'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export const CurrencyRateList = ({rates}) => {
    return (
        <List>
            { Object.keys(rates).length > 0 && Object.entries(rates).map(rate => {
             return (
             <ListItem key={rate[0]}> 
                 <ListItemText>{rate[0]}</ListItemText>
                 <ListItemText>{rate[1]}</ListItemText>
             </ListItem>)
             })}
        </List>
    )
}
