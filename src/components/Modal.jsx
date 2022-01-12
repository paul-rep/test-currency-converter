import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';

// import {useSelector, useDispatch} from 'react-redux';


function SimpleDialog(props) {
  const { onClose, selectedValue, open, items, onSelectCurrency } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    console.log("items",items);
    console.log("val",value);

    onSelectCurrency(value)
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      
      <List sx={{ pt: 0, width:'240px' }}>
        <DialogTitle variant="h6">Choose currency</DialogTitle>
        {items.map((item) => (
          <ListItem button sx={{ width:'100%',textAlign:'center' }} onClick={() => handleListItemClick(item)} key={item}>
          
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  onSelectCurrency: PropTypes.func.isRequired
};

export default function Modal({items, onSelectCurrency}) {
  const [open, setOpen] = React.useState(true);
  const [selectedValue, setSelectedValue] = React.useState(items[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <Box sx={{mb:5}}>
      <Typography variant="subtitle1" component="div">
        Selected: {selectedValue}
      </Typography>
      <br />
      <Button variant="outlined" onClick={handleClickOpen}>
        Choose currency
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        items={items}
        onSelectCurrency={onSelectCurrency}
      />
    </Box>
  );
}
