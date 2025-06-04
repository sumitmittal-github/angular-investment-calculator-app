export class InvestmentInput {

    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;

    constructor(initialInvestment: number, annualInvestment: number, expectedReturn: number, duration: number) {
        this.initialInvestment = initialInvestment;
        this.annualInvestment = annualInvestment;
        this.expectedReturn = expectedReturn;
        this.duration = duration;
    }

}