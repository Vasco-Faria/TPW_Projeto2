// editprofile.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditprofileComponent } from './editprofile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarModule } from '../../components/sidebar/sidebar.module';

@NgModule({
  declarations: [EditprofileComponent],
  imports: [CommonModule, ReactiveFormsModule, SidebarModule],
  exports: [EditprofileComponent],
})
export class EditprofileModule {}