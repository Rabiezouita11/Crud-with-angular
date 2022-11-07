import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Vedos} from "../models/Vedos";

@Injectable({
  providedIn: 'root'
})
export class StageService {
  public url= 'api/vedos/';
  constructor(private http: HttpClient) { }
  getListStage(){
    return this.http.get<Vedos[]>(this.url)
  }
  addStage(p:Vedos){
    return  this.http.post(this.url,p)
  }
  deleteStage(id:number){
    return this.http.delete(this.url+id)
  }
  updateStage(id:number,p:Vedos){
    return this.http.put(this.url+id,p)
  }
  getStageById(id:number){
    return this.http.get<Vedos>(this.url+id)
  }

}
