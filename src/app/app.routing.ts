import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MajorListComponent } from './major-list/major-list.component';
import { MajorDetailComponent } from './major-detail/major-detail.component';

const appRoutes: Routes = [
	{
		path:"",
		component: MajorListComponent,
	},
	{
		path:"majors",
		component: MajorListComponent,
	},
	{
		path:"majors/:slug",
		component: MajorDetailComponent,
	}
]

@NgModule({
	imports: [
		RouterModule.forRoot(
			appRoutes
		)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule{}