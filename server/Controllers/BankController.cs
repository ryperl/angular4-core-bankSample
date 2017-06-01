using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CrankBank.Models;
using CrankBank.Services;

namespace CrankBank.Controllers
{
    [Route("api/[controller]")]
    public class BankController : Controller
    {
        private IBankingService _bankingService;
        public BankController(IBankingService bankingService)
        {
            _bankingService = bankingService;
        }

        [HttpGet("AccountSummaries")]
        public IActionResult GetAccountSummaries()
        {
            var summaries = _bankingService.GetAccountSummaries();

            if(summaries == null) 
            {
                return NotFound();
            }

            return new JsonResult(summaries);
        }

        [HttpGet("AccountDetail/{accountNumber}")]
        public IActionResult GetAccountDetails(string accountNumber)
        {
            if(String.IsNullOrEmpty(accountNumber))
            {
                return BadRequest();
            }

            var accountDetails = _bankingService.GetAccountDetails(accountNumber);

            if(accountDetails == null) 
            {
                return NotFound();
            }

            return new JsonResult(accountDetails);
        }
    }
}