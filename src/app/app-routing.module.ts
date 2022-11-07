import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BoodyComponent} from "./boody/boody.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {FormComponent} from "./form/form.component";
import {ChercherVedosComponent} from "./chercher-vedos/chercher-vedos.component";

const routes: Routes = [
  {path:'update/:id', component: FormComponent},
  {path:'home',component: BoodyComponent},
  {path:'chercherVedos',component: ChercherVedosComponent},
  {path:'ajouterVedos',component: FormComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},

  {path:'**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
