import { Component } from '@angular/core'  //@angular/core is coming from systemjs.config.js

@Component({
	selector: 'events-app', //we give our component a selector so we can display in a HTML page
	template: `
		<nav-bar></nav-bar>
		<router-outlet></router-outlet>
	`
})  //This component decorator is used by angularjs to know about this class
export class EventsAppComponent {
	
}