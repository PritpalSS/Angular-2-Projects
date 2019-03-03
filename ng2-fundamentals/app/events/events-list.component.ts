import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'

@Component({
	template: `
		<div>
			<h1>Upcoming Angular 2 Events</h1>
			<hr/>
			<div class="well">
				<div> Hello World</div>
			</div>
			<div class="row">
				<div *ngFor="let event of events" class="col-md-5">
					<event-thumbnail #thumbnail (eventClick)="handleEventClicked($event)" (click)="handleThumbnailClick(event.name)"
					[event]="event"></event-thumbnail> 
				</div>
			</div>
			<!-- we pass event data into this component using an attribute, in this case which is event1-->
			<!-- [event] matches the name of the input parameter and "event1" matches the name of a member in our component -->
			<h3>{{thumbnail.someProperty}}</h3>
			<!-- #thumbnail is thumbnail\'s' template variable-->
			<button class="btn btn-primary" (click)="thumbnail.logFoo()">Log me some foo</button>
		</div>
	`,
	styles: [
		.thumbnail { min-height: 210px; }
		.well div { color: red; }
	]
})
export class EventsListComponent implements OnInit{
	events:any

	constructor(private eventService: EventService, private toastr: ToastrService) {
	}

	ngOnInit() {
		this.eventService.getEvents().subscribe(events => { this.events = events})
	}

	handleEventClicked(data) {
		console.log('received:', data);
	}

	handleThumbnailClick(eventName){
		this.toastr.success(eventName);
	}

}