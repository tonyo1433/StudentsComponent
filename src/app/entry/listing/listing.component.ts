import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
      printing = false;

      listStudents(): void{
        this.printing = true;
        console.log('Showing stored students.');
      }
  constructor() { }

  ngOnInit() {
  }

}
