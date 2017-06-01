import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './components/app/app.component';
import { FormatAccountNumberPipe } from './pipes/format-account-number.pipe';
import { HeaderComponent } from './components/shared/header/header.component';
import { AccountActivityComponent } from './components/account/account-activity/account-activity.component';
import { AccountDetailComponent } from './components/account/account-detail/account-detail.component';
import { AccountListComponent } from './components/account/account-list/account-list.component';
import { AccountSummaryComponent } from './components/account/account-summary/account-summary.component';

import { AccountService } from './services/account.service';

@NgModule({
  declarations: [
    AppComponent,
    FormatAccountNumberPipe,
    HeaderComponent,
    AccountActivityComponent,
    AccountDetailComponent,
    AccountListComponent,
    AccountSummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ AccountService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
