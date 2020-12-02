import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
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
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
