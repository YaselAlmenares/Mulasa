import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as AppState from './app-store/app.reducers';
import { ErrorHandlerService } from './services/error-handler.service';
import * as peripheralSelectors from './peripheral/store/peripheral-selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  errorhandlersubscription!: Subscription;
  
  title = 'GateWays Manager';
  mobileQuery!: MediaQueryList;
  isLoading=false;
  isLoadingSub!: Subscription;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from(
    {length: 50},
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  );

  private _mobileQueryListener: () => void;

  
  constructor( private errorhandlerservices : ErrorHandlerService,
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    private store: Store<AppState.AppState>) {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    }
 

  ngOnInit(): void {

    /*this.isLoadingSub= this.store.select(peripheralSelectors.selectIsLoading).subscribe({
      next:(isLoading)=>{
        this.isLoading=isLoading; 
      }

  });*/
}

  OnClose(){
    
  }

  ngOnDestroy(): void {
    this.errorhandlersubscription.unsubscribe();
    this.mobileQuery.removeListener(this._mobileQueryListener);

  }

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test

  //(window.location.host);

}
