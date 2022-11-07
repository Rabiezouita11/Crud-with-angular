import { Component, OnInit } from '@angular/core';
import {Vedos} from "../models/Vedos";
import {StageService} from "../services/stage.service";
import {askConfirmation} from "@angular/cli/utilities/prompt";
import {NotificationsService} from "angular2-notifications";

@Component({
  selector: 'app-boody',
  templateUrl: './boody.component.html',
  styleUrls: ['./boody.component.css']
})
export class BoodyComponent implements OnInit {
 text!:String;
  public list!: Vedos[];
  public stage!: Vedos;
  constructor(private  stageservice:StageService , private service: NotificationsService) { }
  aaa:any;
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

        return this.list[i].nbrShared++ ;




  }

}
