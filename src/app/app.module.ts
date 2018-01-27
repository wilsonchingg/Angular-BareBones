import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './services/shared/data.service';
import { AuthGuard } from './services/auth/authGuard.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, AppRoutingModule ],
  declarations: [ AppComponent, AppRoutingModule.components ],
  providers:    [ DataService, AuthGuard ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
