import { Component } from "@angular/core";
import { EventService } from "../shared/event.service";

@Component({
  templateUrl: "./event-details.component.html",
  styles: [
    `
      .container: {
        padding-left: 20px;
        padding-right: 20px;
      }
      .event-image: {
        heigth: 100px;
      }
    `,
  ],
})
export class EventDetailsComponent {
  event: any;
  constructor(private eventService: EventService) {}

  ngOnit() {
    this.event = this.eventService.getEvent(1);
  }
}
