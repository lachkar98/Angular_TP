import { Ticket } from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Fès',
    description: '',
    date: dateToday,
    author: 'Paul'
  },
  {
    title: 'SI5 in El Hoceima',
    description: 'Description du voyage',
    date: dateToday,
    author: 'Anakin'
  },
];
