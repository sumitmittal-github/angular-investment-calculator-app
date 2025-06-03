import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentResults } from '../investment-results/investment-results.model';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss',
  imports: [FormsModule]

})
export class UserInputComponent implements OnInit {

  @Output()
  investmentResultsEvent = new EventEmitter<InvestmentResults[]>();
  
  enteredInitialInvestment: number = 100000;
  enteredAnnualInvestment: number = 12000;
  enteredExpectedReturn: number = 15;
  enteredDuration: number = 15;

  ngOnInit(): void {
    this.onSubmit();
  }

  onSubmit(){
    const investmentResults : InvestmentResults[] = this.calculateInvestmentResults(this.enteredInitialInvestment, this.enteredAnnualInvestment, this.enteredExpectedReturn, this.enteredDuration);
    this.investmentResultsEvent.emit(investmentResults);
  }

  calculateInvestmentResults(initialInvestment: number, annualInvestment: number, expectedReturn: number, duration: number) {
    const investmentResults = [];
    let investmentValue = initialInvestment;
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest = investmentValue - annualInvestment * year - initialInvestment;
      investmentResults.push({
        year: year,
        valueEndOfYear: investmentValue,
        interest: interestEarnedInYear,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year//,
        //annualInvestment: annualInvestment,
      });
    }
    return investmentResults;
  }


}