// profile.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPostsComponent } from './detail-posts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarModule } from '../../components/sidebar/sidebar.module';

@NgModule({
  declarations: [DetailPostsComponent],
  imports: [CommonModule, ReactiveFormsModule, SidebarModule],
  exports: [DetailPostsComponent],
})
export class DetailPostsModule {}