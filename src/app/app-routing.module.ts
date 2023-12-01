import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMallsComponent } from './components/list-malls/list-malls.component';

export const routes: Routes = ([] = [
  {
    path: '',
    component: ListMallsComponent,
    data: {
      layout: 'empty',
    },
  },
]);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
