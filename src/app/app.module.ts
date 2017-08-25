import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { MajorListComponent } from './major-list/major-list.component';
import { MajorDetailComponent } from './major-detail/major-detail.component';

/*const appRoutes: Routes = [
  {path:"majors:slug",component: MajorListComponent},
  {path:"major/:slug",redirectTo: 'majors/:slug',pathMatch: 'full'}
]*/

@NgModule({
  declarations: [
    AppComponent,
    MajorListComponent,
    MajorDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
