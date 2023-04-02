import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { STUDENTS_MOCKED } from "src/mocks/students.mock";
import { Student } from "src/models/student";

@Injectable({
    providedIn : 'root'
})

export class StudentService {
    private studentsList : Student[] = STUDENTS_MOCKED;
    // l'observale
    public students$ : BehaviorSubject<Student[]> = new BehaviorSubject<Student[]>(this.studentsList);
    
    constructor (){}
    
}