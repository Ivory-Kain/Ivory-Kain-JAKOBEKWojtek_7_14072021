import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/common-types';
import { AuthService } from 'src/app/services/auth.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post!: Post;
  @Input() isComment!: boolean;

  showCommentButton = false;
  showDeleteButton = false;

  constructor(
    private postsService: PostsService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.isAdmin.subscribe((isAdmin) => {
      this.showDeleteButton = isAdmin;
    });
    this.route.url.subscribe((segments) => {
      this.showCommentButton = segments[0].toString() === 'forum';
    });
  }

  onClap(post: Post) {
    this.postsService.clap(post).subscribe(() => {
      this.route.url.subscribe((segments) => {
        segments[0].toString() === 'forum'
          ? this.postsService.loadPosts()
          : this.postsService.loadPost(post.postId || post.id);
      });
    });
  }
  onDelete(post: Post) {
    this.postsService.removePost(post.id).subscribe(() => {
      this.route.url.subscribe((segments) => {
        segments[0].toString() === 'forum'
          ? this.postsService.loadPosts()
          : post.postId
          ? this.postsService.loadPost(post.postId)
          : this.router.navigate(['/forum']);
      });
    });
  }
}
