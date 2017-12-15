import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './components/info.component';
import { VendorsComponent } from './components/vendors.component';
import { BooksComponent } from './components/books.component';
import { ColorComponent } from './components/color.component';

const routes: Routes = [
  { path: '', component: InfoComponent },
  { path: 'vendors', component: VendorsComponent },
  { path: 'books', component: BooksComponent },
  { path: 'color', component: ColorComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
