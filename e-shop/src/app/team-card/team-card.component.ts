import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent implements OnInit {
  @Input() name: string = "";
  @Input() role: string = "";
  @Input() linkSrc: string = "";
  @Input() imageSrc: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
