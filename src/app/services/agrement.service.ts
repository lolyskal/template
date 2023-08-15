import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Agrement} from "../models/agrement";
import {Observable} from "rxjs";
import {environement} from "../../environement/environement.prod";

@Injectable({
  providedIn: 'root'
})
export class AgrementService {

  constructor(
    private http: HttpClient
  ) {
  }

  create(agrement:Agrement): Observable<Agrement> {
    return this.http.post<Agrement>(`${environement.backendHost}/agrement/agrementSave`,agrement);

  }
  findAll():Observable<Agrement[]>{
    return this.http.get<Agrement[]>(`${environement.backendHost}/agrement/agrements`)
  }
  delete(id : number):Observable<unknown>{
    return this.http.delete(`${environement.backendHost}/agrement/supprimeragrement/${id}`)
  }

  findById( id: number | undefined) :Observable<Agrement> {
    return this.http.get<Agrement>(`${environement.backendHost}/agrement/${id}`);

  }

  update(id: number | undefined, agrement: Agrement):Observable<Agrement>{
    return this.http.put<Agrement>(`${environement.backendHost}/agrement/update/${id}`, agrement)
  }
}
