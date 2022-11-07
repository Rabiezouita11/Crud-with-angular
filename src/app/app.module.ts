import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BoodyComponent } from './boody/boody.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {SimpleNotificationsModule} from "angular2-notifications";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { YPipe } from './y.pipe';
import { ChercherVedosComponent } from './chercher-vedos/chercher-vedos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoodyComponent,
    FooterComponent,
    FormComponent,
    NotfoundComponent,
    YPipe,
    ChercherVedosComponent,


  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
      HttpClientModule,
      NgbModule,
      Ng2SearchPipeModule,
      SimpleNotificationsModule.forRoot(),
      BrowserAnimationsModule
    ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
