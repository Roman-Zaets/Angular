import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {User} from '../../models/User';
import {Post} from '../../models/Post';
import {Comment} from '../../models/Comment';

// @ts-ignore
@Component({
  selector: 'app-root',
  template: `<app-user *ngFor="let u of users" [user]="u"></app-user>
    <app-post *ngFor="let p of posts" [post]="p"></app-post>
    <app-comment *ngFor="let c of comments" [comment]="c"></app-comment>
  `,
  styles: [``]
})
export class AppComponent {

  users: User[];
  posts: Post[];
  comments: Comment[];

constructor(private httpClient: HttpClient) {
  this.httpClient
    .get<User[]>('https://jsonplaceholder.typicode.com/users')
    .subscribe(data => this.users = data);
  this.httpClient
    .get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .subscribe(data => this.posts = data);
  this.httpClient
    .get<Comment[]>('https://jsonplaceholder.typicode.com/comments?_limit=10')
    .subscribe(data => this.comments = data);
}
}
