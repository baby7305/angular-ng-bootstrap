import { Component, OnInit, Input } from '@angular/core';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
  // add NgbAlertConfig  to the component providers
  providers: [NgbAlertConfig]
})
export class ConfigComponent implements OnInit {

  @Input() public alerts: Array<string> = [];

  constructor(alertConfig: NgbAlertConfig) {
    // customize default values of alerts used by this component tree
    alertConfig.type = 'success';
    alertConfig.dismissible = false;
  }

  ngOnInit() {
  }

}
