// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// plugins, libs
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// ngRx
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './redux/counter.reducer';

// components
import { AppComponent } from './app.component';
import { EmittersComponent } from './emitters/emitters.component';
import { GrandchildComponent } from './emitters/grandchild/grandchild.component';
import { ParentComponent } from './emitters/parent/parent.component';
import { ChildComponent } from './emitters/child/child.component';
import { ReduxComponent } from './redux/redux.component';
import { RxParentComponent } from './redux/rx-parent/rx-parent.component';
import { RxChildComponent } from './redux/rx-child/rx-child.component';
import { RxGrandchildComponent } from './redux/rx-grandchild/rx-grandchild.component';

@NgModule({
  declarations: [
    AppComponent,
    EmittersComponent,
    ParentComponent,
    ChildComponent,
    GrandchildComponent,
    ReduxComponent,
    RxParentComponent,
    RxChildComponent,
    RxGrandchildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    StoreModule.forRoot({ count: counterReducer }), // variable "count" in store gets return of reducer
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
