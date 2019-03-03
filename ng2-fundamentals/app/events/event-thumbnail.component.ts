import { Component, Input } from '@angular/core'

@Component({
	selector: 'event-thumbnail',
	template: `
		<div [routerLink]="['/events', event.id]"  class="well hoverwell thumbnail">
			<h2>{{event?.name}}</h2>
				<div>Date: {{event?.date}}</div>
				<div class="well" [ngStyle]="getStartTimeStyle()" [ngClass]= "getStartTimeClass()" [ngSwitch]="event?.time">
					Time: {{event?.time}}
					<span *ngSwitchCase="'8:00 am'">(Early Start)</span>
					<span *ngSwitchCase="'10:00 am'">(Late Start)</span>
					<span *ngSwitchDefault>(Normal Start)</span>
				</div>
				<div>Price: \${{event?.price}}</div>
				<div [hidden]="!event?.location">
					<span>Location: {{event?.location?.address}} </span>
					<span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
				</div>
				<div [hidden]="!event?.onlineUrl"> <!-- <div *ngIf="event?.onlineUrl"> -->
					Online URL: {{event?.onlineUrl}}
				</div>
				<button class="btn btn-primary" (click)="handleClickMe()"> Click me! </button>
		</div>
	`,
	styles: [`
		.pad-left { margin-left: 10px; }
	`]
})

export class EventThumbnailComponent {
	//@Input() decorator tells angular that this event will be passed in from another component 
	@Input() event:any  //creating property called event and it is of type any, we don't care what data type it is
	@Output() eventClick = new EventEmitter();

	handleClickMe() {
		this.eventClick.emit(this.event.name);  //this component will output data "foo" when button is clicked
	}

	someProperty:any = "some value"
	logFoo() {
		console.log('foo');
	}

	getStartTimeClass() {
		//Method 1
		if(this.event && this.event.time === '8:00 am')
			return 'green bold'
		return ''

		//Method 2
		/*if(this.event && this.event.time === '8:00 am')
			return ['green', 'bold']
		return []
		*/

		//Method 2
		/*const isEarlyStart = this.event && this.event.time === '8:00 am'
		return {green: isEarlyStart, bold: isEarlyStart}*/
	}

	getStartTimeStyle():any {
		//Method 1
		if(this.event && this.event.time === '8:00 am')
			return {color: '#003300', 'font-weight': 'bold'}
		return {}
	}

}