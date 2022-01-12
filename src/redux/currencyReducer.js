const initial_state = {
    base_currency: 'USD',
    is_currency_chosen: false
};

export const currencyReducer = (state=initial_state, action) => {
    switch(action.type){
        case 'CHANGE_CURRENCY':
            return { ...state, base_currency: action.payload }
        case 'SET_INITIAL_CURRENCY':
            return { ...state, is_currency_chosen: action.payload }
        default:
            return state;
    }
};