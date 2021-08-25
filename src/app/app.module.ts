import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromiseComponent } from './promise/promise.component';
import { HeaderComponent } from './header/header.component';
import { ObservableComponent } from './observable/observable.component';
import { FromEventComponent } from './from-event/from-event.component';
import { ListComponent } from './list/list.component';
import { IntervalComponent } from './appServices/interval/interval.component';
import { OffromComponent } from './appServices/offrom/offrom.component';
import { ToarrayComponent } from './toarray/toarray.component';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';
import { MapComponent } from './map/map.component';
import { PluckComponent } from './pluck/pluck.component';
import { FilterComponent } from './filter/filter.component';
import { TapComponent } from './tap/tap.component';
import { TakeComponent } from './take/take.component';
import { RetryComponent } from './retry/retry.component';
import { HttpClientModule } from '@angular/common/http';
import { DebounceComponent } from './debounce/debounce.component';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { SubjectComponent } from './subject/subject.component';
import { Comp1Component } from './NewFolder/comp1/comp1.component';
import { Comp2Component } from './NewFolder/comp2/comp2.component';
import { Comp3Component } from './NewFolder/comp3/comp3.component';
import { ReplayComponent } from './replay/replay.component';

@NgModule({
  declarations: [
    AppComponent,
    PromiseComponent,
    HeaderComponent,
    ObservableComponent,
    FromEventComponent,
    ListComponent,
    IntervalComponent,
    OffromComponent,
    ToarrayComponent,
    CustomObservableComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebounceComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    ReplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
