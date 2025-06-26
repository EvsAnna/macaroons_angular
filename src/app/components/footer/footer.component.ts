import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../app.component";

@Component({
  selector: 'footer-components',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent extends AppComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
