import {Component, Input, OnInit} from '@angular/core';
import {Vedos} from "../models/Vedos";
import {StageService} from "../services/stage.service";
import {ActivatedRoute, Router} from "@angular/router";
import {BooleanInput} from "ng-boolean-input";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public vedos!: Vedos;
  public actionn!: string;
  public action !: string;



  constructor(private stageService: StageService,
              private router: Router, private currentRoute: ActivatedRoute) {
  }

  xx!: string;

  ngOnInit(): void {
    console.log(this.currentRoute.snapshot.params['id'])
    //condition id
    let id = this.currentRoute.snapshot.params['id'];
    if (id != null) {
      this.actionn = "update";
      //update  +1 examen
      this.stageService.getStageById(id).subscribe(
        (data: Vedos) => this.vedos = data
      )
    } else {
      this.actionn = "save";
      this.vedos = new Vedos();
    }
  }

  saveStage() {
    if (this.actionn == "save") {


        this.vedos.nbrShared=0;
      //this.productService.list.push(this.product);
      this.stageService.addStage(this.vedos).subscribe(
        () => this.router.navigate(['/home'])
      );
    }
    else{
      this.stageService.updateStage(this.vedos.id, this.vedos).subscribe(
        ()=>this.router.navigate(['/home'])
      );
    }
  }
}
