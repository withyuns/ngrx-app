import { Injectable } from "@angular/core";
import { Actions, Effect, toPayload } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { VendorService } from '../services/vendor.service';
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/debounceTime';
import "rxjs/add/operator/switchMap";

import * as vendorAction from '../actions/vendor.action';

@Injectable()
export class VendorEffects {

  constructor(
    private actions: Actions,
    private vendorService: VendorService,
  ) {}
/*
  @Effect()
  getVendors$: Observable<Action> = this.actions
    .ofType(vendorAction.GET_VENDORS)
    .map(payload => {
        try {
          return {
              type: vendorAction.GET_COMPLETE,
              //payload: this.vendorService.getAllVendors()
              payload: this.vendorService.getMockVendors()
          };
        } catch (error) {

        } finally {

        }
      });
*/
  @Effect()
  getVendors2$: Observable<Action> = this.actions
    .ofType(vendorAction.GET_VENDORS)
    .map(toPayload)
    .switchMap(payload => {
        let data = this.vendorService.getMockVendors();
        console.log("Data from the service");
        console.log(data);
        return Observable.of({
          type: vendorAction.GET_COMPLETE,
          payload: data
        });
    });
}