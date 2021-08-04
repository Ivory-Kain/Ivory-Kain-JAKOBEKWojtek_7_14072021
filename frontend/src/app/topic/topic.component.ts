import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss'],
})
export class TopicComponent implements OnInit {
  accountName = 'Wojtek Jakobek';
  counter = 1;
  reactName = 'Jean-Louis';
  reactNameTopic = 'Mon premier message';
  newTopicName = '';
  newTopicContent = '';
  constructor() {}

  ngOnInit(): void {}
}
