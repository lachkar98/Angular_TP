import { Ticket } from '../models/ticket';
import { majorType } from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Fès',
    description: '',
    date: dateToday,
    student: 'Paul',
    major :majorType.SI,
    archived : true
  },
  {
    title: 'SI5 in El Hoceima',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Anakin',
    major :majorType.GB,
    archived :true
  },
];
