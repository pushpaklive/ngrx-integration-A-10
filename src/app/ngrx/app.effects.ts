import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Action } from "@ngrx/store";
import { EMPTY, Observable, of } from 'rxjs';
import { map, mergeMap, catchError, tap, switchMap } from 'rxjs/operators';
import { DataService } from "../data.service";

import * as appAction from './app.actions'

export function toPayLoad(action) {
    return action.payload;
}

@Injectable()
export class SalesEffects {

    constructor(private actions$: Actions, private dataService: DataService) { }

@Effect()
getCustomers = this.actions$.pipe(
  ofType(appAction.ActionTypes.GetSales),
  switchMap(() =>
    this.dataService.getSalesDetails().pipe(
      map(allSales => new appAction.GetSalesActionSuccess({salesDetails: allSales}))
    ),
  ),
);
}