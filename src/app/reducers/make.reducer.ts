import { Make } from '../models/make';
import * as MakeAction from '../actions/make.action';

// import { SayService } from '../services/say.service';

export interface State {
  make: string;
};

const initialState: State = {
  make: 'Initial Color'
};

export function reducer(state = initialState, action: MakeAction.Actions): State {
  switch (action.type) {
    case MakeAction.MAKE_RED: {
        return { 
            make: 'Red color'
        };
    }

    case MakeAction.MAKE_BLUE: {
        return { 
            make: 'Blue color'
        };
    }

    case MakeAction.MY_COLOR: {
        return {
            make: action.payload ? ( action.payload + ' color from reducer' ) : 'Please put any color'
        };
    }

    case MakeAction.ASSIGN_COLOR: {
        return { 
            make: action.payload
        };
    }

    default: {
        return state;
    }
  }
}

export const getMake = (state: State) => state.make;