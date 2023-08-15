import {Component, OnInit} from '@angular/core';
import {AgrementService} from "../../services/agrement.service";
import {Router} from "@angular/router";
import {Agrement} from "../../models/agrement";

@Component({
  selector: 'app-list-agrement',
  templateUrl: './list-agrement.component.html',
  styleUrls: ['./list-agrement.component.scss']
})
export class ListAgrementComponent implements OnInit{
  constructor(
    private agrementService:AgrementService,
    private router: Router
  ) {
  }
  agrements: Agrement [] = [];
  private agrementId : number | undefined;

  ngOnInit(): void {
    this.fetchAllAgrement();
  }
  fetchAllAgrement(){
    this.agrementService.findAll().subscribe(
      {
        next:(data)=>{
          this.agrements = data;
    }
      }
    )
  }
  goToCreate(){
    this.router.navigate(['agrements/add-agrement']);
  }

  confirmDelete() {
    if(this.agrementId){
      this.agrementService.delete(this.agrementId)
        .subscribe({
          next:()=>{
            this.fetchAllAgrement();
          }
      });

    }

  }

  delete(id: number | undefined) {
    this.agrementId = id;
  }

  updateAgrement(id: number | undefined) {
    this.router.navigate(['/agrements/update/',id]);
  }
}
