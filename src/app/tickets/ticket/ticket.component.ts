import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from '../../../models/ticket';
import { majorType } from '../../../models/ticket';
@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  /**
   * Inputs & Output allow communication between parent & child components.
   * More information: https://angular.io/guide/component-interaction
   */
  @Input()
  ticket: Ticket;

  @Output()
  ticketHasBeenSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  notifyDelete :EventEmitter<Ticket> = new EventEmitter<Ticket>();
  
  @Output()
  notifyArchive: EventEmitter<Ticket> = new EventEmitter<Ticket>();

  constructor() {
  }

  ngOnInit() {
  }

  selectTicket() {
    this.ticketHasBeenSelected.emit(true);
  }

  deleteTicket(){
    this.notifyDelete.emit(this.ticket);
  }

  archiveTicket(){
    this.notifyArchive.emit(this.ticket);
  }
}
