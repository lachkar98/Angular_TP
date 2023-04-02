import { Ticket } from '../models/ticket';
import { majorType } from '../models/ticket';
import { STUDENTS_MOCKED } from './students.mock';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Fès',
    description: '',
    date: dateToday,
    student: STUDENTS_MOCKED[0],
    major: majorType.SI,
    archived: true
  },
  {
    title: 'SI5 in El Hoceima',
    description: 'Description du voyage',
    date: dateToday,
    student: STUDENTS_MOCKED[1],
    major: majorType.GB,
    archived: true
  },
  {
    title: 'SI6 in El Jadida',
    description: 'Description du voyage',
    date: dateToday,
    student: STUDENTS_MOCKED[2],
    major: majorType.GB,
    archived: false
  }
];
