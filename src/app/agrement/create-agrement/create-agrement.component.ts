import {Component, OnInit} from '@angular/core';
import {AgrementService} from "../../services/agrement.service";
import {Agrement} from "../../models/agrement";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-create-agrement',
  templateUrl: './create-agrement.component.html',
  styleUrls: ['./create-agrement.component.scss']
})
export class CreateAgrementComponent implements OnInit{


  agrements: Agrement = { code: '', numeroAgrement: 0, libelle: '', duree: 0 };
  customStylesValidated: boolean = false;
  private agrementId: number | undefined;
  title = 'Ajouter un agrement';


  constructor(
    private agrementService:AgrementService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }
  ngOnInit(): void {
    this.agrementId = this.route.snapshot.params['id'];
    if (this.agrementId){
      this.title = "Modifier un Agrement";
      this.agrementService.findById(this.agrementId)
        .subscribe({
          next: (data) => {
            this.agrements = data;
          }
        });
    }
  }
  save() {
    this.agrementService.create(this.agrements)
      .subscribe({
        next: () => {
          this.router.navigate(['/agrements/list-agrement'])
        },
        error: () => {
          console.log('error')
        }
      });
  }
  onSubmit1() {
    this.customStylesValidated = true;
    this.save();
  }
}
