import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { FeetypeComponent } from './feetype/feetype.component';
const routes: Routes = [
  { path: 'myprofile', component: MyprofileComponent},
  { path: 'editprofile', component: EditprofileComponent},
  { path: 'resetpassword', component: ResetpasswordComponent},
  { path: 'logout', component: FeetypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
