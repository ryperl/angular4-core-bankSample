using System;
using System.Collections.Generic;
using System.Linq;
using CrankBank.Models;

namespace CrankBank.Services
{
    public class BankingService : IBankingService
    {
        private List<AccountSummary> _accountSummaries;

        public BankingService()
        {
            _accountSummaries = new List<AccountSummary> {
                new AccountSummary { AccountNumber = "012-123-1234", Type = AccountType.Checking, Name = "John's Checking - server", Balance = 1234.56 },
                new AccountSummary { AccountNumber = "567-234-5586", Type = AccountType.Savings, Name = "John's Holiday Stash - server", Balance = 5000.27 },
                new AccountSummary { AccountNumber = "9999-2222-3333-4444", Type = AccountType.Credit, Name = "Platinum Card - server", Balance = 1234.56 }
            };
        }
        public AccountDetail GetAccountDetails(string accountNumber)
        {
            var summary = _accountSummaries.FirstOrDefault(a => a.AccountNumber == accountNumber);

            if(summary == null) 
            {
                return null;
            }

            var random = new Random();
            var transactions = new List<AccountTransaction>();
            for(var i = 0; i < 15; i++)
            {
                transactions.Add( new AccountTransaction {
                    TransactionDate = DateTimeOffset.Now - TimeSpan.FromDays(1),
                    Desription = $"Server transaction #{i}",
                    Amount = random.NextDouble() * 500 - 250
                });
            }

            return new AccountDetail { AccountSummary = summary, AccountTransactions = transactions };
        }

        public List<AccountSummary> GetAccountSummaries()
        {
            return _accountSummaries;
        }
    }
}