import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';
import { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss',
  imports: [FormsModule]

})
export class UserInputComponent implements OnInit {

  investmentService = inject(InvestmentService);

  enteredInitialInvestment = signal<number>(100000);
  enteredAnnualInvestment = signal<number>(12000);
  enteredExpectedReturn = signal<number>(15);
  enteredDuration = signal<number>(15);

  ngOnInit(): void {
    this.onSubmit();
  }

  onSubmit() : void {
    const investmentInput: InvestmentInput = new InvestmentInput(
      this.enteredInitialInvestment(),
      this.enteredAnnualInvestment(),
      this.enteredExpectedReturn(),
      this.enteredDuration()
    );
    this.investmentService.calculateInvestmentResults(investmentInput);
  }


}