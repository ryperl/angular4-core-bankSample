import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AccountDetail } from '../../../models/account-detail.type';
import { AccountService } from '../../../services/account.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  @Input() accountDetail: AccountDetail;

  constructor(
    private accountService: AccountService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'] as string;
    this.accountService.getAccountDetail(id)
      .then(accountDetail => this.accountDetail = accountDetail);
  }

}
