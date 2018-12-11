import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfficialComponent } from './official/official.component';
import { BasicComponent } from './basic/basic.component';
import { StaticComponent } from './static/static.component';
import { ToggleComponent } from './toggle/toggle.component';
import { PreventchangeComponent } from './preventchange/preventchange.component';
import { ConfigComponent } from './config/config.component';

const appRoutes: Routes = [
  { path: '', component: OfficialComponent },
  { path: 'official', component: OfficialComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OfficialComponent,
    BasicComponent,
    StaticComponent,
    ToggleComponent,
    PreventchangeComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
