import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmittersComponent } from './emitters/emitters.component';
import { ReduxComponent } from './redux/redux.component';

const routes: Routes = [
  {
    path: 'emitters',
    component: EmittersComponent,
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
