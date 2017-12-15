/** This file includes all reducers */
import { createSelector } from '@ngrx/store';

import { ActionReducerMap } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';

import * as makeReducer from './make.reducer';
import * as vendorReducer from './vendor.reducer';
import * as bookReducer from './book.reducer';

/** Reducers create State & reducers */
export interface State {
    makeState: makeReducer.State;
    vendorState: vendorReducer.State;
    bookState: bookReducer.State;
}

// const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
export const reducers: ActionReducerMap<State> = {
    makeState: makeReducer.reducer,
    vendorState: vendorReducer.reducer,
    bookState: bookReducer.reducer
};

export const getMakeState = (state: State) => state.makeState;
export const getMakeColor = createSelector(getMakeState, makeReducer.getMake);

export const getVendorState = (state: State) => state.vendorState;
export const getVendorData = createSelector(getVendorState, vendorReducer.getAllVendors);

export const getBookState = (state: State) => state.bookState;

export const getSearchBookIds = createSelector(
    getBookState,
    bookReducer.getIds 
  );
  export const getSearchQuery = createSelector(
    getBookState,
    bookReducer.getQuery
  );
  export const getSearchLoading = createSelector(
    getBookState,
    bookReducer.getLoading
  );
  export const getSearchError = createSelector(
    getBookState,
    bookReducer.getError
  );