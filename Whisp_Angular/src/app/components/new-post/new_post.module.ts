// new_post.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPostComponent } from './new-post.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewPostComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [NewPostComponent],
})
export class New_PostModule {}
