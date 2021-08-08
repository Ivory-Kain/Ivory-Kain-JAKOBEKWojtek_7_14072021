import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/common-types';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss'],
})
export class ForumComponent implements OnInit {
  topicTitle = 'Mon premier message';
  topicContent = 'Mon message de ouf';
  topicAuthor = 'Wojtek';
  accountName = 'Wojtek Jakobek';
  counter = 1;
  reactName = 'Jean-Louis';
  reactNameTopic = 'Mon premier message';

  posts!: Post[];
  postListTitle = 'Les derniers Posts';
  createPostTitle = 'Créez votre Post';

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
    // Init List
    this.postsService.loadPosts();
  }
}
