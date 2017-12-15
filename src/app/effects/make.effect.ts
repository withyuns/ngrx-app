import { Injectable } from "@angular/core";
import { Actions, Effect, toPayload } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { MakeService } from '../services/make.service';
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";

import * as makeAction from '../actions/make.action';

@Injectable()
export class MakeEffects {

  constructor(
    private actions: Actions,
    private makeService: MakeService,
  ) {}

  @Effect()
  getColor$: Observable<Action> = this.actions
    .ofType(makeAction.MAKE_RED)
    .map(payload => {
        try {
          return {
              type: makeAction.ASSIGN_COLOR,
              payload: this.makeService.getServiceColor()
          };
        } catch (error) {

        } finally {

        }
      });
}