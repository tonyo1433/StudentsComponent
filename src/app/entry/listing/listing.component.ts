import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'listing',
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
