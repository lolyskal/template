import {Component, OnInit} from '@angular/core';
import {Agrement} from "../../models/agrement";
import {AgrementService} from "../../services/agrement.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-agrement',
  templateUrl: './edit-agrement.component.html',
  styleUrls: ['./edit-agrement.component.scss']
})
export class EditAgrementComponent implements OnInit{
  agrements: Agrement = { code: '', numeroAgrement: 0, libelle: '', duree: 0 };
  customStylesValidated: boolean = false;
   agrementId: number | undefined;
    private id: number | undefined =0;

  constructor(
    private agrementService:AgrementService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }
  ngOnInit(): void {
    this.agrementId = this.route.snapshot.params['id'];
    this.id = this.agrementId;
    console.log(this.agrementId)
      this.agrementService.findById(this.agrementId)
        .subscribe({
          next: (data) => {
            this.agrements = data;
          }
        });

  }
  update(){
    this.agrementService.update(this.agrementId, this.agrements)
      .subscribe({
      next:(response)=>{
        this.router.navigate(['/agrements/list-agrement'])
      },
      error(err){
        console.log("Erreur de mis a jours" , err);
      },
    });
  }

}
