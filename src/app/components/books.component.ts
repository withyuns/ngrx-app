import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as rootReducer from '../reducers';
import * as bookAction from '../actions/book.action';
import { Book } from '../models/book';

@Component({
  selector: 'app-books',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './books.component.html' 
})
export class BooksComponent implements OnInit {
    booksIds$: Observable<string[]>;

    constructor(private store: Store<rootReducer.State>) {}
        
    ngOnInit() {
        this.booksIds$ = this.store.select(rootReducer.getSearchBookIds);
    }

    getBooks(query: string) {
        this.store.dispatch(new bookAction.Search(query));
        console.log(this.booksIds$);
    }
}