import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { actions, salesReducer, selectors } from "./ngrx";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  salesDetails: [];
  productDetails: [];

  constructor(private store: Store<salesReducer.State>) { }

  ngOnInit() {
    this.store.dispatch(new actions.GetSalesAction());
  }
}