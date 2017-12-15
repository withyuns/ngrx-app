import { Action } from '@ngrx/store';
import { Vendor } from '../models/vendor';

export const GET_VENDORS = '[Vendor] Get';
export const GET_COMPLETE = '[Vendor] Get Complete';

export class GetVendorsAction implements Action {
    readonly type = GET_VENDORS;

    // Remember, payload is optional
    constructor(public payload: string) { }
}

export class GetVendorsCompleteAction implements Action {
    readonly type = GET_COMPLETE;
    
    constructor(public payload: Array<any>) { }
}

export type Actions 
= GetVendorsAction 
| GetVendorsCompleteAction;