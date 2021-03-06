
import * as app from './app.actions';

export interface State  {
    salesDetails: {},
    productDetails: {}
}

export const initialState: State = {
    salesDetails: {},
    productDetails: {}
}

export function reducer(state = initialState, action: app.Actions): State {
    switch(action.type) {
        case app.ActionTypes.GetSalesSuccess: {
            console.log('reducer : GetProductsSuccess : payload : ', action.payload)
            const {salesDetails} = action.payload;
            return {
                ...state,
                salesDetails: salesDetails
            }
        }
        default: {
            return state;
        }
    }
}