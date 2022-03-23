import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Peripheral } from 'src/app/peripheral/peripheral-model';
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
  change! : Subscription;
  gateways!: Gateway[];
  peripherals!: Peripheral[];
  selected = "";
  name="";


  constructor(private gatewayService: GatewayService,private router: Router,private activeRoute: ActivatedRoute) { }
  

  ngOnInit(): void {

    this.loadList();

    this.change = this.gatewayService.changelist.subscribe({
      next:(data)=>{
        this.loadList();
      }
    })

   
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
    if(confirm("Are you shure?")){
      this.gatewayService.deleteGateway(id).subscribe({
        next:(data)=>{
          this.gatewayService.changelist.next("");
          this.peripherals= Array<Peripheral>();
          this.name="";
        }
      });
    }
  }

  private loadList(){
    this.gatewaySub = this.gatewayService.getGateways().subscribe(
      (response)=>{
        this.gateways = response as Gateway[];
      }
    );
  }

  onEdit(id:string){
    this.router.navigate(['edit',id], {relativeTo:this.activeRoute});
  }




  ngOnDestroy(): void {
    this.gatewaySub.unsubscribe();
  }

}
