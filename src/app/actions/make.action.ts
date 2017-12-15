import { Action } from '@ngrx/store';
import { Make } from '../models/make';

export const MAKE_RED = '[Make] Red';
export const MAKE_BLUE = '[Make] Blue';
export const MY_COLOR = '[Make] My Color';
export const ASSIGN_COLOR = '[Make] Assign Color';

export class MakeRedAction implements Action {
    readonly type = MAKE_RED;
    
    // We don't need Argument here
    //constructor(public payload: string) { }
}

export class MakeBlueAction implements Action {
    readonly type = MAKE_BLUE;
    
    //constructor(public payload: string) { }
}

export class MakeMyColorAction implements Action {
    readonly type = MY_COLOR;
    
    constructor(public payload: string) { }
}

export class PutColorAction implements Action {
    readonly type = ASSIGN_COLOR;
    // We don't need Argument here
    constructor(public payload: string) { }
}

export type Actions 
= MakeRedAction 
| MakeBlueAction
| MakeMyColorAction
| PutColorAction;