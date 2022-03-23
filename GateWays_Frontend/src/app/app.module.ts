import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeripheralListComponent } from './peripheral/peripheral-list/peripheral-list.component';
import { PeripheralModule } from './peripheral/peripheral.module';
import { ErrorHandlerService } from './services/error-handler.service';
import { GatewayService } from './services/gateway.service';
import { HttpRepositoryService } from './services/http-repository.service';
import { DropdownDirective } from './shared/dropdown.directive';
import { HoverDirective } from './shared/hover.directive';
import { ErrorComponent } from './error/error.component';
import { ErrorhandleInterceptor } from './shared/error-handle.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { StoreModule } from '@ngrx/store';
import { AppReducers } from './app-store/app.reducers';
import {EffectsModule} from '@ngrx/effects';
import { PeripheralEffects } from './peripheral/store/peripheral-effects';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    ErrorComponent,
    PageNotFoundComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot(AppReducers),
    EffectsModule.forRoot([PeripheralEffects]),
    StoreDevtoolsModule.instrument({name: 'Test'}),

    
  ],
  providers: [
    HttpRepositoryService,
    GatewayService,
    ErrorHandlerService,
    {provide: 
      HTTP_INTERCEPTORS,
      useClass: ErrorhandleInterceptor,
      multi: true
    },

  ],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
