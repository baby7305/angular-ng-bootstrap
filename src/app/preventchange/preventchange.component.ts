import { Component, OnInit } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-preventchange',
  templateUrl: './preventchange.component.html',
  styleUrls: ['./preventchange.component.scss']
})
export class PreventchangeComponent implements OnInit {

  public beforeChange($event: NgbPanelChangeEvent) {

    if ($event.panelId === 'preventchange-2') {
      $event.preventDefault();
    }

    if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
      $event.preventDefault();
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
