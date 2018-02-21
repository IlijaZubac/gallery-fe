import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './shared/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { RegisterComponent } from './shared/register/register.component';
import { AllGalleriesComponent } from './shared/all-galleries/all-galleries.component';
import { LogoutComponent } from './shared/logout/logout.component';
import { MyGalleriesComponent } from './shared/my-galleries/my-galleries.component';
import { CreateGalleriesComponent } from './shared/create-galleries/create-galleries.component';


const appRoutes: Routes = [
  
  {
    path: '',
    component: AllGalleriesComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'my_galleries',
    component: MyGalleriesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'create_galleries',
    component: CreateGalleriesComponent
  },
 
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
