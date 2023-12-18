// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginModule } from './pages/login/login.module';
import { RegistrationModule } from './pages/registration/registration.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LoginModule, HttpClientModule, FormsModule, RegistrationModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
