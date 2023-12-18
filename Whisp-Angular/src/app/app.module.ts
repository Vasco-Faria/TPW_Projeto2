// app.module.ts
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { LoginComponent } from './whisp/account/login/login.component';

@NgModule({
  declarations: [
    // ... other components
    LoginComponent,
  ],
  imports: [
    HttpClientModule, // Add HttpClientModule to the imports array
    // ... other modules
  ],
  // ... other module configurations
})
export class AppModule {}
