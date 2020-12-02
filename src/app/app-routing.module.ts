import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './counter/parent/parent.component';
import { ReduxComponent } from './redux/redux.component';

const routes: Routes = [
  {
    path: '',
    component: ParentComponent,
  },
  {
    path: 'redux',
    component: ReduxComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
