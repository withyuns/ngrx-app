import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Scheduler } from 'rxjs/Scheduler';
import { async } from 'rxjs/scheduler/async';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { VendorService } from '../services/vendor.service';
import * as vendorAction from '../actions/vendor.action';
import { Vendor } from '../models/vendor';

export const SEARCH_DEBOUNCE = new InjectionToken<number>('Search Debounce');
export const SEARCH_SCHEDULER = new InjectionToken<Scheduler>(
  'Search Scheduler'
);

@Injectable()
export class VendorEffects {
  @Effect()
  getVendors$: Observable<Action> = this.actions$
    .ofType(vendorAction.GET_VENDORS)
    .debounceTime(this.debounce || 300, this.scheduler || async)
    .map((action: vendorAction.GetVendorsAction) => action.payload)
    .switchMap(query => {

      const nextGet$ = this.actions$.ofType(vendorAction.GET_VENDORS).skip(1);
      
      // Typescript compiler doens't recognize that an action has payload property, so use "query as any"
      return this.vendorService
        .getAllVendors(query)
        .takeUntil(nextGet$)
        .map((vendors: any) => new vendorAction.GetVendorsCompleteAction(vendors.allVendors));
        // .map((vendors: Vendor[]) => new vendorAction.GetVendorsCompleteAction(vendors.allVendors));
    });

  constructor(
    private actions$: Actions,
    private vendorService: VendorService,
    @Optional()
    @Inject(SEARCH_DEBOUNCE)
    private debounce: number,
    /**
       * You inject an optional Scheduler that will be undefined
       * in normal application usage, but its injected here so that you can mock out
       * during testing using the RxJS TestScheduler for simulating passages of time.
       */
    @Optional()
    @Inject(SEARCH_SCHEDULER)
    private scheduler: Scheduler
  ) {}
}






