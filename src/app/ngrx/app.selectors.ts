import { createSelector, createFeatureSelector } from "@ngrx/store";

import { State} from "./app.reducers";

export const selectSalesDetailsState = createFeatureSelector<State>('localstore');
export const selectSalesDetailsSuccessState = createSelector(selectSalesDetailsState, (state: State) => state.salesDetails);