import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';

/** Ngrx modules */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

/** Apollo-Angular */
import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { HttpClientModule } from '@angular/common/http';

/** Containers */
import { TopContainer } from './containers/top.container';
import { BodyContainer } from './containers/body.container';

/** Components */
import { AppComponent } from './app.component';
import { InfoComponent } from './components/info.component';
import { VendorsComponent } from './components/vendors.component';
import { BooksComponent } from './components/books.component';
import { ColorComponent } from './components/color.component';
import { MenuComponent } from './components/top/menu.component';

/** Services */
import { MakeService } from './services/make.service';
import { VendorService } from './services/vendor.service';
import { BookService } from './services/book.service';

/** PrimeNg modules */
import { ButtonModule, FieldsetModule, DataTableModule, PanelModule } from 'primeng/primeng';

/** Redux models */
//import { reducer } from './reducers/vendor.reducer';
import { VendorEffects } from './effects/vendor.effect';
import { reducers } from './reducers';
import { MakeEffects } from './effects/make.effect';
import { BookEffects } from './effects/book.effect';


@NgModule({
  declarations: [
    AppComponent,
    TopContainer, BodyContainer,
    InfoComponent, VendorsComponent, BooksComponent, ColorComponent, MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    // For using PrimeNg
    AppRoutingModule,
    ApolloModule,
    HttpClientModule,           // provides HttpClient for HttpLink
    HttpLinkModule,
    ButtonModule,
    FieldsetModule,
    DataTableModule,
    PanelModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([
      VendorEffects,
      MakeEffects,
      BookEffects
    ]),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : []
  ],
  providers: [
    VendorService,
    MakeService,
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
