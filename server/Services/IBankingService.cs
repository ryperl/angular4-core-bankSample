using System;
using System.Collections.Generic;
using CrankBank.Models;

namespace CrankBank.Services
{
    public interface IBankingService
    {
        List<AccountSummary> GetAccountSummaries();
        AccountDetail GetAccountDetails(string accountNumber);
    }
}