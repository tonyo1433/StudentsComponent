import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  studentCollection: Array<object> =[];
  studentRecord: object;

  studNo: number;
  studFname: string;
  studLname: string;
  studProg: string;
  studYr: number;

  messages ='';
  printing = false;

 private checkPatterns(value:any, pattern:RegExp): boolean{
    if(pattern.test(value))
      return true;
    else
      return false;
  }

  addStudentEntry(): boolean{
    this.printing = false;
    const stringPattern = /^[A-z\s]+$/;
    const studNumberPattern = /^[0-9]+$/;
    const studYearPattern = /^[1-5]+$/;

    if(this.checkPatterns(this.studNo,studNumberPattern) &&
      this.checkPatterns(this.studFname,stringPattern) &&
      this.checkPatterns(this.studLname,stringPattern) &&
      this.checkPatterns(this.studProg,stringPattern) &&
      this.checkPatterns(this.studYr,studYearPattern)){

        this.studentRecord={
          studNumber: this.studNo,
          studFirstName: this.studFname,
          studLastName: this.studLname,
          studProgram: this.studProg,
          studYear: this.studYr
        };
        this.studentCollection.push
        (this.studentRecord);
        this.messages = null;
        this.clearValues();

      }else{
        this.messages = 'Errors have been encountered and therefore cannot continue to process requested operation.';
        return false;
      }
  }
      listStudents(): void{
        this.printing = true;
        console.log('Showing stored students.');
      }
      clearValues():void{
        this.studNo = null;
        this.studFname = null;
        this.studLname = null;
        this.studProg = null;
        this.studYr = null;
      }  
        ngOnInit() {
  } 
  }
