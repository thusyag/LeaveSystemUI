import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('userDataChild') userData: any;
  
  constructor() { }

  ngOnInit() {
  }

}
