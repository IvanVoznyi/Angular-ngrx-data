import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from './model/post';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isLoading$: Observable<boolean>;
  errors$: Observable<any>;
  posts$: Observable<Array<Post>>;

  constructor(private postService: PostService) {
    this.isLoading$ = this.postService.loading$;
    this.errors$ = this.postService.errors$;
    this.posts$ = this.postService.getAll();
  }
}
