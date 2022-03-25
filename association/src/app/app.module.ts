import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { Routes } from '@angular/router';
import { FeetypeComponent } from './feetype/feetype.component';
const routes: Routes = [
  { path: 'myprofile', component: MyprofileComponent},
  { path: 'editprofile', component: EditprofileComponent},
  { path: 'resetpassword', component: ResetpasswordComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    ContactComponent,
    MyprofileComponent,
    EditprofileComponent,
    ResetpasswordComponent,
    FeetypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
