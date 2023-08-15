import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CreateAgrementComponent} from "./create-agrement/create-agrement.component";
import {ListAgrementComponent} from "./list-agrement/list-agrement.component";
import {EditAgrementComponent} from "./edit-agrement/edit-agrement.component";

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Agrements'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list-agrement'
      },
      {
        path: 'add-agrement',
        component: CreateAgrementComponent,
        data: {
          title: 'Ajout agrement'
        }
      },
      {
        path: 'list-agrement',
        component: ListAgrementComponent,
        data: {
          title: 'Liste Agrement'
        }
      },
      {
        path: 'update/:id',
        component: EditAgrementComponent,
        data: {
          title: 'Edit Agrement'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgrementModule { }
