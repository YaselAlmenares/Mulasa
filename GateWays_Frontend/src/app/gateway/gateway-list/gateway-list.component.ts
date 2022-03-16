import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Peripheral } from 'src/app/shared/peripheral-model';
import { GatewayService } from 'src/app/services/gateway.service';
import { Gateway, GatewayP } from '../gateway-model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'gateway-list',
  templateUrl: './gateway-list.component.html',
  styleUrls: ['./gateway-list.component.css']
})
export class GatewayListComponent implements OnInit,OnDestroy {

  gatewaySub! : Subscription;
  gateways!: Gateway[];
  peripherals!: Peripheral[];
  selected = "";
  name="";


  constructor(private gatewayService: GatewayService,private router: Router,private activeRoute: ActivatedRoute) { }
  

  ngOnInit(): void {

    this.gatewaySub = this.gatewayService.getGateways().subscribe(
      (response)=>{
        this.gateways = response as Gateway[];
      }
    );
  }

  SelectPeripherals(id:string){
    this.selected = id;
    this.gatewaySub = this.gatewayService.getGatewayDetails(id).subscribe(
      (response)=>{
        let gatP = response as GatewayP
        this.peripherals = gatP.peripherals;
        this.name=gatP.name;
        console.log(response);
      }
    );
  }

  onDelete(id:string){
    
  }

  onEdit(id:string){
    this.router.navigate(['edit',id], {relativeTo:this.activeRoute});
  }




  ngOnDestroy(): void {
    this.gatewaySub.unsubscribe();
  }

}
