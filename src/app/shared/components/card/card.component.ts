import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  imgBackground: string;

  @Input()
  title: string;

  @Input()
  subtitle: string;

  @Input()
  description: string;

  constructor() {}

  ngOnInit() {}
}
