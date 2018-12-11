import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-selfclosing',
  templateUrl: './selfclosing.component.html',
  styleUrls: ['./selfclosing.component.scss']
})
export class SelfclosingComponent implements OnInit {

  private _success = new Subject<string>();

  staticAlertClosed = false;
  successMessage: string;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.staticAlertClosed = true, 20000);

    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);
  }

  public changeSuccessMessage() {
    this._success.next(`${new Date()} - Message successfully changed.`);
  }

}
