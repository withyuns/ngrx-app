import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { VendorService } from '../services/vendor.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as rootReducer from '../reducers';
import * as vendorAction from '../actions/vendor.action';

import { Vendor } from '../models/vendor';

import 'rxjs/add/operator/let';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-vendors',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './vendors.component.html'
})
export class VendorsComponent implements OnInit {
    testVendors: Array<any>;
    vendors$: Observable<Array<any>>;

    constructor(
        private vendorService: VendorService,
        private store: Store<rootReducer.State>
    ) {}
        
    ngOnInit() {
        this.testVendors = [ 
            { name: 'Test User 1', code: 'Test Code 1'},
            { name: 'Test User 2', code: 'Test Code 2'}
        ];
        this.vendors$ = this.store.select(rootReducer.getVendorData);
    }

    getVendors(str: string) {
        this.store.dispatch(new vendorAction.GetVendorsAction(str));
    }
}