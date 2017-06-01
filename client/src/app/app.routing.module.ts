import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountListComponent } from './components/account/account-list/account-list.component';
import { AccountDetailComponent } from './components/account/account-detail/account-detail.component';




const routes: Routes = [
  { path: '', redirectTo: '/account', pathMatch: 'full' },
  { path: 'account', component: AccountListComponent },
  { path: 'detail/:id', component: AccountDetailComponent },
  { path: '**', redirectTo: 'account' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
