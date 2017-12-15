import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as rootReducer from '../reducers';
import * as makeAction from '../actions/make.action';
import { Make } from '../models/make';

import 'rxjs/add/operator/let';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-colors',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './color.component.html'
})
export class ColorComponent implements OnInit {
    color$: Observable<string>;

    constructor(private store: Store<rootReducer.State>) {
        this.color$ = this.store.select(rootReducer.getMakeColor);
    }
        
    ngOnInit() {
    }

    makeRed() {
        this.store.dispatch(new makeAction.MakeRedAction);
    }

    makeBlue() {
        this.store.dispatch(new makeAction.MakeBlueAction);
    }

    makeMyColor(myColor: string) {
        this.store.dispatch(new makeAction.MakeMyColorAction(myColor));
    }
}