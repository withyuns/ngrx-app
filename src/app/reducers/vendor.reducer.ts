import { Vendor } from '../models/vendor';
import * as vendorAction from '../actions/vendor.action';

export interface State {
  vendors: Array<any>;
};

const initialState: State = {
  vendors: [ { name: 'Initial Name', code: 'Initial Code'} ]
};

export function reducer(state = initialState, action: vendorAction.Actions): State {
  switch (action.type) {
    case vendorAction.GET_COMPLETE: {
      return {
        vendors: action.payload
      };
    }
    default: {
      return state;
    }
  }
}

export const getAllVendors = (state: State) => state.vendors;



