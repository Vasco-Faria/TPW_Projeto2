// homepage.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PostsModule } from '../../components/posts/posts.module';
import { New_PostModule } from '../../components/new-post/new_post.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule , PostsModule, New_PostModule],
  exports: [],
})
export class HomepageModule {}
