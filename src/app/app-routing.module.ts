import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {PfofileComponent} from './pfofile/pfofile.component';
import {HtmlComponent} from './html/html.component';
import {JavascriptComponent} from './javascript/javascript.component';
import {CssComponent} from './css/css.component';
import {PhpComponent} from './php/php.component';
import {PhythonComponent} from './phython/phython.component';


const routes: Routes = [
  {path : '', component : HtmlComponent},
  {path : 'css', component : CssComponent},
  {path : 'javascript', component : JavascriptComponent},
  {path : 'php', component : PhpComponent},
  {path : 'phython', component : PhythonComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
