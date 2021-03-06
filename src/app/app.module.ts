// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// plugins, libs
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// ngRx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
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
    StoreModule.forRoot({ count: counterReducer }), // counterReducer returns state value
    // ngRx Dev Tools (optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
