import { Action, State } from "@ngrx/store";

export enum ActionTypes{
    GetSales = '[SALES] Get Sales Detail',
    GetSalesSuccess = '[SALES] Get Sales Detail Success',
    GetProducts = '[PRODUCTS] Get Products Deatail',
    GetProductsSuccess = '[PRODUCTS] Get Products Deatail Success'
}

export class GetSalesAction implements Action{
    readonly type = ActionTypes.GetSales
}

export class GetSalesActionSuccess implements Action{
    readonly type = ActionTypes.GetSalesSuccess

    constructor(public payload: {salesDetails:{}}){}
}

export class GetProductsAction implements Action{
    readonly type = ActionTypes.GetProducts
} 

export class GetProductsActionSuccess implements Action{
    readonly type = ActionTypes.GetProductsSuccess

    constructor(public payload: {productDetails:{}}){}
} 

export type Actions
    = GetSalesAction | GetProductsAction | GetSalesActionSuccess | GetProductsActionSuccess