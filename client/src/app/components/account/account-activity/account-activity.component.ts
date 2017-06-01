import { Component, OnInit, Input } from '@angular/core';

import { AccountTransaction } from '../../../models/account-transaction.type';
import { AccountService } from '../../../services/account.service';

@Component({
  selector: 'app-account-activity',
  templateUrl: './account-activity.component.html',
  styleUrls: ['./account-activity.component.css']
})
export class AccountActivityComponent implements OnInit {
  @Input() accountTransactions: AccountTransaction[];

  constructor() { }

  ngOnInit() {
  }

}
