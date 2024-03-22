import { Component, OnInit } from '@angular/core';
import {MtxPopoverPositionEnd, MtxPopoverPositionStart} from "@ng-matero/extensions/popover";

@Component({
  selector: 'app-example-page-button',
  templateUrl: './example-page-button.component.html',
  styleUrls: ['./example-page-button.component.scss']
})
export class ExamplePageButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enterDelay = 0;
  leaveDelay = 0;
  xOffset = 100;
  yOffset = 0;
  closeOnPanelClick = false;
  positionStart: MtxPopoverPositionStart = 'below';
  positionEnd: MtxPopoverPositionEnd = 'after';
  previewUrl = '/assets/img/image.png'

}
