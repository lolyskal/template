import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  FormControlDirective,
  FormDirective,
  FormFeedbackComponent,
  FormLabelDirective,
  GutterDirective,
  RowComponent,
  RowDirective
} from "@coreui/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ],
  imports: [
    CommonModule,
    ButtonDirective,
    CardBodyComponent,
    CardComponent,
    CardHeaderComponent,
    ColComponent,
    FormControlDirective,
    FormDirective,
    FormFeedbackComponent,
    FormLabelDirective,
    FormsModule,
    ReactiveFormsModule,
    RowComponent,
    RowDirective,
    GutterDirective
  ]
})
export class AgrementModule { }
