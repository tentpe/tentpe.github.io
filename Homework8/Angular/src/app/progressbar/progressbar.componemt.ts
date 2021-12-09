import { Component } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})

export class ProgressBarComponent {
  loading: boolean = false;
  finished: boolean = false;
  loadingerror: boolean = false;
  searchclicked: boolean = false;
}