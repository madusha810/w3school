import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { HomeComponent } from './home/home.component';
import { PfofileComponent } from './pfofile/pfofile.component';
import { AboutusComponent } from './aboutus/aboutus.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SidenavComponent } from './sidenavhtml/sidenav.component';
import { HtmlComponent } from './html/html.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { SidenavjavascriptComponent } from './sidenavjavascript/sidenavjavascript.component';
import { CssComponent } from './css/css.component';
import { SidenavcssComponent } from './sidenavcss/sidenavcss.component';
import { PhpComponent } from './php/php.component';
import { SidenavphpComponent } from './sidenavphp/sidenavphp.component';
import { PhythonComponent } from './phython/phython.component';
import { SidenavphythonComponent } from './sidenavphython/sidenavphython.component';


@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    HomeComponent,
    PfofileComponent,
    AboutusComponent,
    SidenavComponent,
    HtmlComponent,
    JavascriptComponent,
    SidenavjavascriptComponent,
    CssComponent,
    SidenavcssComponent,
    PhpComponent,
    SidenavphpComponent,
    PhythonComponent,
    SidenavphythonComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
