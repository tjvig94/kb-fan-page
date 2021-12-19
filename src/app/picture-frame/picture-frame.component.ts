import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture-frame',
  templateUrl: './picture-frame.component.html',
  styleUrls: ['./picture-frame.component.scss']
})
export class PictureFrameComponent implements OnInit {

  @Input() picture: string | undefined;

  ngOnInit(): void {
  }

}
