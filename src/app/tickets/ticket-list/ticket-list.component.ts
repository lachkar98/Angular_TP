import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Ticket } from '../../../models/ticket';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

  public ticketList: Ticket[] = [];
  public displayTicketArchived : boolean = true;

  constructor(public ticketService: TicketService) {
    this.ticketService.tickets$.subscribe((tickets) => this.ticketList = tickets);
  }

  ngOnInit() {
  }

  ticketHasBeenSelected(hasBeenSelected: boolean) {
    console.log('event received from child:', hasBeenSelected);
  }

  deleteTicket(ticket: Ticket) {
    console.log("Arrivée à delete fonction")
    this.ticketService.deleteTicket(ticket);
  }

  archiveTicket(ticket:Ticket){
    this.ticketService.archiveTicket(ticket);
  }

  hideArchivedTicket(){
    this.displayTicketArchived = false;
    console.log(this.displayTicketArchived);
  }

  showArchivedTicket(){
    this.displayTicketArchived = true;
    console.log(this.displayTicketArchived);
  }
}
