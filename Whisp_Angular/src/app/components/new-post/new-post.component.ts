import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { New_PostModule } from './new_post.module';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css'
})
export class NewPostComponent {
  postForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }
 
  ngOnInit() {
   this.postForm = this.formBuilder.group({
     text: ['', Validators.required],
     image: ['', Validators.required],
     video: ['', Validators.required]
   });
  }
 
  onSubmit() {
    const formData = new FormData();
    Object.entries(this.postForm.value).forEach(([key, value]) => {
      if (typeof value === 'string' || value instanceof Blob) {
        formData.set(key, value as string | Blob);
      }
    });
    
   this.http.post('http://localhost:8000/post/create/', formData).subscribe(
     response => {
       // Handle successful response here
     },
     error => {
       // Handle error here
     }
   );
  }

  onFileChange(event: any, field: any) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      const control = this.postForm.get(field);
      if (control) {
        control.setValue(file);
      }
    }
   }
   
   

}

