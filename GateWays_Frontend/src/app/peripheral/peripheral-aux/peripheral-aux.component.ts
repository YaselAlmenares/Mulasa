import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Peripheral } from 'src/app/peripheral/peripheral-model';

@Component({
  selector: 'app-peripheral-aux',
  templateUrl: './peripheral-aux.component.html',
  styleUrls: ['./peripheral-aux.component.css']
})
export class PeripheralAuxComponent implements OnInit {

  @Input() peripherallist!: Peripheral[];
  @Input()name!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
