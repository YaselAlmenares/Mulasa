import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Peripheral } from 'src/app/shared/peripheral-model';

@Component({
  selector: 'app-peripheral-aux',
  templateUrl: './peripheral-aux.component.html',
  styleUrls: ['./peripheral-aux.component.css']
})
export class PeripheralAuxComponent implements OnInit {

  @Input() peripherallist!: Peripheral[];
  @Input()action!:string;
  @Output() onGatewyaSelected: EventEmitter<Peripheral> = new EventEmitter<Peripheral>();

  constructor() { }

  ngOnInit(): void {
  }

}
