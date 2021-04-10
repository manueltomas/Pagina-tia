import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroouroComponent } from './livroouro/livroouro.component';

const routes: Routes = [
  { path: '', redirectTo: 'paginaouro', pathMatch: 'full'},
  { path: 'paginaouro', component: LivroouroComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
