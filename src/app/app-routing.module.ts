import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CameraComponent } from './component/applications/camera/camera.component';
import { MapComponent } from './component/applications/map/map.component';
import { PowerComponent } from './component/power/power.component';

const routes: Routes = [
  {path : 'map', component : MapComponent},
  {path : 'power', component : PowerComponent},
  {path : 'camera', component : CameraComponent},
  {path : '**', component : PowerComponent},
  {path : "", component : PowerComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
