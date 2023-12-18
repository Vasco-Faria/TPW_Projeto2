import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostsModule } from './posts.module';

@Component({
 selector: 'app-posts',
 templateUrl: './posts.component.html',
 styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
 posts: any[] = [];

 constructor(private http: HttpClient) { }

 ngOnInit() {
   this.getPosts().subscribe(data => {
     this.posts = data;
   });
 }

 getPosts(): Observable<any> {
   return this.http.get('http://localhost:8000/posts/');
 }
}
