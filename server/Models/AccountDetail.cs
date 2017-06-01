using System;
using System.Collections.Generic;

namespace CrankBank.Models
{
    public class AccountDetail
    {
        public AccountSummary AccountSummary { get; set; }
        public List<AccountTransaction> AccountTransactions { get; set; }
    }
}