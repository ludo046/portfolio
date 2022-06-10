import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './component/applications/map/map.component';
import { PowerComponent } from './component/power/power.component';

const routes: Routes = [
  {path : 'map', component : MapComponent},
  {path : '**', component : PowerComponent},
  {path : "", component : PowerComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
