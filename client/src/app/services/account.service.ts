import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import { AccountSummary } from '../models/account-summary.type';
import { AccountDetail } from '../models/account-detail.type';
import { AccountType } from '../models/account-type.enum';

@Injectable()
export class AccountService {

  baseUrl = 'http://localhost:5000/';

  constructor(private http: Http) { }

  getAccountSummaries(): Promise<AccountSummary[]> {
    const url = `${this.baseUrl}api/bank/accountsummaries`;

    return this.http.get(url)
      .map(response => response.json() as AccountSummary[])
      .toPromise();
  }

  getAccountDetail(id: string): Promise<AccountDetail> {
    const url = `${this.baseUrl}api/bank/accountdetail/${id}`;

    return this.http.get(url)
      .map(response => response.json() as AccountDetail)
      .toPromise();
  }
}
