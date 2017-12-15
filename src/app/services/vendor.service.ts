 import 'rxjs/add/operator/map';
 import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Vendor } from '../models/vendor';
import { MockVendors } from '../vendors.mock';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { HttpLink } from 'apollo-angular-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class VendorService {
  fetchedData: any;
  variables = {
    str: ''
  }

  constructor(
    private apollo: Apollo,
    private httpLink: HttpLink
  ) {
    const http = httpLink.create({uri: 'https://api.graph.cool/simple/v1/cj7w2y0b603hk01473ibace2b'});
    const cache = new InMemoryCache();

    const auth = setContext((_, { headers }) => {
      const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTM1MzU4MDMsImlhdCI6MTUxMDk0MzgwMywicHJvamVjdElkIjoiY2o3dzJ5MGI2MDNoazAxNDczaWJhY2UyYiIsInVzZXJJZCI6ImNqYTQ4eGExMTRsdzUwMTQ0bHc0eHF2MmoiLCJhdXRoRGF0YSI6eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIn0sIm1vZGVsTmFtZSI6IlVzZXIifQ.JZYODMmqxVlOSZqjWlEWygNxAUo9fCIxFYzX0rupZbY';
      return { headers: new HttpHeaders().set('Authorization',token) };
    });

    apollo.create({
      link: auth.concat(http),
      cache
    });
  }

  getAllVendors(str: string): Observable<any> {
    this.variables.str = str;
    return this.apollo.watchQuery({
      query: gql`
        query ($str: String!) {
          allVendors (
            filter: {
              OR: [
                { code_contains: $str },
                { name_contains: $str }
              ]
            }
            orderBy: code_ASC
          ){
            name
            code
          }
        }`,
      variables: this.variables
    }).valueChanges.switchMap(
      val => Observable.of(val.data)
    );
  }

  getMockVendors(): Observable<any> {
    return Observable.of(MockVendors);
  }
}