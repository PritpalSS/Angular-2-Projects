import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http'

import {
	EventsListComponent,
	EventThumbnailComponent,
	EventService,
	EventDetailsComponent,
	CreateEventComponent,
	EventRouteActivator,
	EventListResolver
} from './events/index'

import { EventsAppComponent } from './events-app.component' //This is top component or container component of our entire app 
import { NavBarComponent } from './nav/navbar.component'
import { ToastrService } from './common/toastr.service'
import { appRoutes } from './routes'
import { Error404Component } from './errors/404.component'


@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		RouterModule.forRoot(appRoutes)  //importing routes into our app
	],
	declarations: [
		EventsAppComponent,
		EventsListComponent,
		EventThumbnailComponent,
		EventDetailsComponent,
		NavBarComponent,
		CreateEventComponent,
		Error404Component
	],  //Registering components within the module
	providers: [
		EventService, 
		ToastrService, 
		EventRouteActivator,
		EventListResolver,
		{ 
			provide: 'canDeactivateCreateEvent', 
			useValue: checkDirtyState
		}
	],
	bootstrap: [EventsAppComponent]  //This is the component we will use to bootstrap our module
})
export class AppModule {

	function checkDirtyState(component:CreateEventComponent) {
		if (component.isDirty)
			return window.confirm('You have not saved this event, do you really want to cancel?')
		return true
	}

}
