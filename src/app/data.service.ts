import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: 'root',
})
export class DataService {

    

    constructor(private http: HttpClient) { }

    getSalesDetails(){
        return this.http.get('http://localhost:3000/sales-details');
    }


}