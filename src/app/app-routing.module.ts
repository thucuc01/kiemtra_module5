import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateComponent} from './book/create/create.component';
import {ListComponent} from './book/list/list.component';
import {UpdateComponent} from './book/update/update.component';
import {InfoComponent} from './book/info/info.component';
import {DeleteComponent} from './book/delete/delete.component';



const routes: Routes = [
  // {path:'',redirectTo:'employee',pathMatch:'full'},
  {path: 'add' , component: CreateComponent},
  {path: 'list' , component: ListComponent},
  {path: 'update/:id' , component: UpdateComponent},
  {path: 'delete/:id' , component: DeleteComponent},
  {path: 'info/:id' , component: InfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
