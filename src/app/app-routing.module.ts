import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntervalComponent } from './appServices/interval/interval.component';
import { OffromComponent } from './appServices/offrom/offrom.component';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';
import { DebounceComponent } from './debounce/debounce.component';
import { FilterComponent } from './filter/filter.component';
import { FromEventComponent } from './from-event/from-event.component';
import { ListComponent } from './list/list.component';
import { MapComponent } from './map/map.component';
import { ObservableComponent } from './observable/observable.component';
import { PluckComponent } from './pluck/pluck.component';
import { PromiseComponent } from './promise/promise.component';
import { ReplayComponent } from './replay/replay.component';
import { RetryComponent } from './retry/retry.component';
import { SubjectComponent } from './subject/subject.component';
import { TakeComponent } from './take/take.component';
import { TapComponent } from './tap/tap.component';
import { ToarrayComponent } from './toarray/toarray.component';

const routes: Routes = [

  { path : 'promise' , component : PromiseComponent  },
  { path : 'observable' , component : ObservableComponent, children:[
    { path : '' , component : ListComponent },
    { path : 'fromevent' , component : FromEventComponent },
    { path : 'interval' , component : IntervalComponent },
    { path : 'of' , component : OffromComponent },
    { path : 'toarray' , component : ToarrayComponent },
    { path : 'custom' , component : CustomObservableComponent },
    { path : 'map' , component : MapComponent },
    { path : 'pluck' , component : PluckComponent },
    { path : 'filter' , component : FilterComponent },
    { path : 'tap' , component : TapComponent },
    { path : 'take' , component : TakeComponent},
    { path : 'Retry' , component : RetryComponent},
    { path : 'debounce' , component : DebounceComponent},
    { path : 'subject' , component : SubjectComponent},
    { path : 'replay' , component : ReplayComponent },
  ]},
  { path : '**', redirectTo : 'promise'  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// Data is Handled// Data is Handled