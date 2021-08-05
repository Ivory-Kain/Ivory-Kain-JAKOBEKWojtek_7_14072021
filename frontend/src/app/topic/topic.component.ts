import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss'],
})
export class TopicComponent implements OnInit {
  counter = '1';
  reactName = '1';
  reactNameTopic = '1';
  accountName = 'Wojtek Jakobek';
  newTopicName = '1';
  newTopicContent = '1';

  constructor() {}

  ngOnInit(): void {}
}
