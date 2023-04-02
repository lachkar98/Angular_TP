import { Student } from "./student";

export enum majorType{
  SI = "SI",
  GB = "GB"
}

export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: Student;
  major?:majorType;
  archived: boolean;
}
