import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  myVar: any = [];

  constructor(private postService : PostsService) { }

  ngOnInit(): void {
    this.getPostsNow()
  }
  getPostsNow(){
    this.postService.getPosts()
    .subscribe(res => {
      this.myVar=res;
    });
  }

}
