import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {AdvantagesType} from "../../types/advantages.type";

@Component({
  selector: 'advantage',
  templateUrl: './advantage.component.html',
  styleUrls: ['./advantage.component.scss']
})
export class AdvantageComponent  {
  @Input() advantage: AdvantagesType ={} as AdvantagesType;
  @Input() i: number = 0;
  @Input() advantageEl!: ElementRef;

  constructor() { }


}
