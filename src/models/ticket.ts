export enum majorType{
  SI = "SI",
  GB = "GB"
}

export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: string;
  major?:majorType;
}
