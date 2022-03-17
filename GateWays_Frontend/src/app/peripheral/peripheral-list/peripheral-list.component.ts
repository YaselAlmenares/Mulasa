import { Component, Input, OnInit } from '@angular/core';
import { Peripheral } from '../peripheral-model';

@Component({
  selector: 'app-peripheral-list',
  templateUrl: './peripheral-list.component.html',
  styleUrls: ['./peripheral-list.component.css']
})
export class PeripheralListComponent implements OnInit {

 @Input() peripherallist!: Peripheral[];
 @Input()name!:string;

  constructor() { }

  ngOnInit(): void {

  }



}


