import { Component, OnInit } from '@angular/core';
import {StageService} from "../services/stage.service";
import {Vedos} from "../models/Vedos";

@Component({
  selector: 'app-chercher-vedos',
  templateUrl: './chercher-vedos.component.html',
  styleUrls: ['./chercher-vedos.component.css']
})
export class ChercherVedosComponent implements OnInit {
aaa!:string;
  public list!: Vedos[];
  public stage!: Vedos;
  constructor( private stageservice:StageService) { }

  ngOnInit(): void {
    this.stageservice.getListStage().subscribe(
      (data: Vedos[])=> this.list= data

    );
  }
  delete(stage:Vedos){

    if (confirm("Press a ok to delete!") == true) {
      this.stageservice.deleteStage(stage.id).subscribe(
        ()=>{
          let i= this.list.indexOf(stage)
          this.list.splice(i,1)
        }
      );
    } else {

    }

  }

  partager(i:number){
    if (this.list[i].public == true){
      return this.list[i].nbrShared++ ;
    }else{
      return this.list[i].nbrShared;
    }



  }

}
