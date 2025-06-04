import { Injectable, signal } from "@angular/core";
import { InvestmentInput } from "./investment-input.model";
import { InvestmentResults } from "./investment-results/investment-results.model";

@Injectable({providedIn: 'root'})
export class InvestmentService {

    investmentResults = signal<InvestmentResults[] | undefined>(undefined)

    calculateInvestmentResults(investmentInput: InvestmentInput) : void{
        const tempResults : InvestmentResults[] = [];
        let investmentValue = investmentInput.initialInvestment;
        for (let i = 0; i < investmentInput.duration; i++) {
          const year = i + 1;
          const interestEarnedInYear = investmentValue * (investmentInput.expectedReturn / 100);
          investmentValue += interestEarnedInYear + investmentInput.annualInvestment;
          const totalInterest = investmentValue - investmentInput.annualInvestment * year - investmentInput.initialInvestment;
          tempResults.push({
            year: year,
            valueEndOfYear: investmentValue,
            interest: interestEarnedInYear,
            totalInterest: totalInterest,
            totalAmountInvested: investmentInput.initialInvestment + investmentInput.annualInvestment * year
          });
        }
        this.investmentResults.set(tempResults);
    }

}