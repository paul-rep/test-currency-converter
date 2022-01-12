const initial_state = {
    base_currency: 'USD'
};

export const currencyReducer = (state=initial_state, action) => {
    switch(action.type){
        case 'CHANGE_CURRENCY':
            return { ...state, base_currency: action.payload }
        default:
            return state;
    }
};