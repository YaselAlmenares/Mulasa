import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Peripheral } from '../peripheral-model';
import * as AppState from '../../app-store/app.reducers';
import { selectPeripherals } from '../store/peripheral-selectors';
import { Observable } from 'rxjs';
import * as peripheralActions from '../store/peripheral-actions';
import { MatSelectionListChange } from '@angular/material/list';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-peripheral-list',
  templateUrl: './peripheral-list.component.html',
  styleUrls: ['./peripheral-list.component.css']
})
export class PeripheralListComponent implements OnInit {

 peripheralList: Observable<Peripheral[]> = this.store.select(selectPeripherals);
 id!:number;
 pos=-1;

  constructor(private store: Store<AppState.AppState>,
    private router: Router ,
    private activeRoute: ActivatedRoute) { 
    
  }

  ngOnInit(): void {

    this.store.dispatch(peripheralActions.StartLoad());
    

  }

  onSelectionListChange(data:MatSelectionListChange){
    this.id = data.options[0].value.id;
    this.pos= data.options[0].value.pos;
  }

  onEdit(){
    if(this.id){
      this.store.dispatch(peripheralActions.StartEdit({pos:this.pos}));
      this.router.navigate(['edit',this.id], {relativeTo:this.activeRoute});
      this.id=Number.NaN;
      this.pos= -1;
    }

  }

  onDelete(){

    if(confirm("Do you want to delete this peripheral?")){
      this.store.dispatch(peripheralActions.StartDelete({id:this.id,pos:this.pos}));
      this.id=Number.NaN;
      this.pos= -1;
    }
    
  }



}


