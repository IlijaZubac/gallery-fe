import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './shared/login/login.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './shared/register/register.component';
import { AuthService } from './auth/auth.service';
import { AllGalleriesComponent } from './shared/all-galleries/all-galleries.component';
import { MyGalleriesComponent } from './shared/my-galleries/my-galleries.component';
import { LogoutComponent } from './shared/logout/logout.component';
import { CreateGalleriesComponent } from './shared/create-galleries/create-galleries.component';
import { GalleryService } from './auth/gallery.service';




@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    AllGalleriesComponent,
    MyGalleriesComponent,
    LogoutComponent,
    CreateGalleriesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    GalleryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
