import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { salesReducer } from './ngrx';
import { EffectsModule } from '@ngrx/effects';
import { SalesEffects } from './ngrx/app.effects';
// import { HighchartsChartComponent, HighchartsChartModule } from 'highcharts-angular';
import { ChartModule } from 'angular-highcharts';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { ChartsComponent } from './charts/charts.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    ChartsComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartModule,
    StoreModule.forRoot({'localstore': salesReducer.reducer}),
    EffectsModule.forRoot([SalesEffects])
  ],
  exports: [
    LandingComponent,
    HeaderComponent,
    ChartsComponent,
    ProductsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
