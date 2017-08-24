import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from
'@angular/forms'
import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { AddingComponent } from './entry/adding/adding.component';
import { ListingComponent } from './entry/listing/listing.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    AddingComponent,
    ListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
