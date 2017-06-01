import { Component, OnInit } from '@angular/core';
import { AccountSummary } from '../../../models/account-summary.type';
import { AccountService } from '../../../services/account.service';
import { AccountType } from '../../../models/account-type.enum';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})

export class AccountListComponent implements OnInit {
  cashAccounts: AccountSummary[];
  creditAccounts: AccountSummary[];

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getAccountSummaries()
      .then(accounts => {
        this.cashAccounts = accounts.filter(v => v.type === AccountType.Checking || v.type === AccountType.Savings);
        this.creditAccounts = accounts.filter(v => v.type === AccountType.Credit);
      });
  }
}
